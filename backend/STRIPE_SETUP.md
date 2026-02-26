# 🔐 Stripe Integration System - Complete Setup Guide

## Overview
This is a production-level, secure Stripe integration system for your MERN stack that includes:
- ✅ Admin-only Stripe Settings dashboard
- ✅ AES-256-GCM encryption for sensitive keys
- ✅ Webhook event handling with signature verification
- ✅ Upsert pattern for settings management
- ✅ Role-based access control

---

## Files Created

### 1. **Backend Models**
- `models/StripeSettings.js` - MongoDB schema for storing Stripe configuration

### 2. **Utilities**
- `utils/encryption.js` - Encryption/Decryption utilities for sensitive data

### 3. **Controllers**
- `controllers/stripeController.js` - Business logic for Stripe operations

### 4. **Routes**
- `routes/stripeRoutes.js` - API endpoints for Stripe settings and webhooks

### 5. **Updated Files**
- `server.js` - Added Stripe routes and raw body parsing for webhooks
- `package.json` - Added Stripe dependency

---

## Setup Instructions

### Step 1: Install Dependencies

```bash
cd backend
npm install
```

This will install the Stripe package.

### Step 2: Generate Encryption Key

Run this command to generate a secure encryption key:

```bash
node -e "console.log(require('crypto').randomBytes(16).toString('hex'))"
```

Output example: `a3f7b8c2d9e1f4a6b3c8d2e7f1a4b9c3`

### Step 3: Update .env File

Add the following variables to your `.env` file:

```env
# Existing variables (keep these)
PORT=5000
MONGO_URI=mongodb+srv://...
JWT_SECRET=namaste_restro_secret_key_2024

# NEW: Add these
ENCRYPTION_KEY=a3f7b8c2d9e1f4a6b3c8d2e7f1a4b9c3
DOMAIN=http://localhost:5000  # Change to your domain in production
```

**IMPORTANT:**
- Never commit ENCRYPTION_KEY to version control
- In production, use environment variable management (AWS Secrets Manager, Vercel Secrets, etc.)
- Store Stripe keys ONLY through the Admin API endpoint (not in .env)

### Step 4: Get Stripe Keys

1. Go to [dashboard.stripe.com](https://dashboard.stripe.com)
2. Sign in or create an account
3. Navigate to **API keys** section
4. Copy your:
   - **Publishable key** (pk_test_... or pk_live_...)
   - **Secret key** (sk_test_... or sk_live_...)
5. Navigate to **Webhooks** section
6. Create a new endpoint:
   - URL: `https://yourdomain.com/api/stripe/webhook` (use `/webhook` for testing)
   - Events: Select all events (or at minimum: `payment_intent.succeeded`, `payment_intent.payment_failed`)
7. Copy the **Signing secret** (whsec_...)

---

## API Endpoints

### Admin Only Routes (Require Authentication + Admin Role)

#### 1. Get Stripe Settings
```http
GET /api/stripe/settings
Authorization: Bearer <JWT_TOKEN>
```

**Response:**
```json
{
  "success": true,
  "data": {
    "publicKey": "pk_test_xxxxx",
    "webhookUrl": "http://localhost:5000/api/stripe/webhook",
    "isLive": false,
    "isEnabled": true,
    "lastUpdated": "2024-02-26T10:30:00Z"
  }
}
```

#### 2. Update Stripe Settings
```http
PUT /api/stripe/settings
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "publicKey": "pk_test_xxxxx",
  "secretKey": "sk_test_xxxxx",
  "webhookSecret": "whsec_xxxxx",
  "webhookUrl": "https://yourdomain.com/api/stripe/webhook"  // Optional
}
```

**Response:**
```json
{
  "success": true,
  "message": "Stripe settings updated successfully",
  "data": {
    "publicKey": "pk_test_xxxxx",
    "webhookUrl": "http://localhost:5000/api/stripe/webhook",
    "isLive": false,
    "isEnabled": true,
    "lastUpdated": "2024-02-26T10:30:00Z"
  }
}
```

**Important Notes:**
- Secret key and webhook secret are encrypted before storage
- Never expose these in the frontend
- Only admin users can update settings
- Settings use upsert pattern (creates if doesn't exist)

#### 3. Toggle Stripe Payments
```http
PUT /api/stripe/toggle
Authorization: Bearer <JWT_TOKEN>
Content-Type: application/json

{
  "isEnabled": true
}
```

**Response:**
```json
{
  "success": true,
  "message": "Stripe payments enabled",
  "data": {
    "isEnabled": true
  }
}
```

### Public Webhook Route

#### Stripe Webhook Endpoint
```http
POST /api/stripe/webhook
Content-Type: application/json
stripe-signature: t=1234567890,v1=xxxxx
```

**Handled Events:**
- `payment_intent.succeeded` - Payment successful
- `payment_intent.payment_failed` - Payment failed
- `charge.refunded` - Charge refunded
- `invoice.paid` - Invoice paid
- `invoice.payment_failed` - Invoice payment failed

**Response:**
```json
{
  "success": true,
  "received": true
}
```

---

## Security Measures

### 1. **Encryption**
- AES-256-GCM encryption for secret keys
- Each encryption uses a unique IV (initialization vector)
- Authentication tags prevent tampering

### 2. **Authentication & Authorization**
- JWT token required for admin endpoints
- Role-based access control (admin only)
- Webhook signature verification using Stripe's signing secret

### 3. **Secret Management**
- Secret keys never exposed in API responses
- Secret keys stored encrypted in database
- Frontend only receives public key and webhook URL

### 4. **Database Security**
- MongoDB with proper authentication
- Sensitive fields encrypted before storage
- Audit trail (updatedBy field for all changes)

### 5. **Webhook Security**
- Stripe signatures verified using `stripe.webhooks.constructEvent()`
- Raw body required for signature verification
- Only Stripe can trigger webhook events

---

## How to Use in Frontend

### 1. Get Public Key (For Client-Side Integration)
```javascript
// Frontend route to get public key
const getStripePublicKey = async () => {
  const response = await fetch('/api/stripe/settings');
  const data = await response.json();
  return data.data.publicKey;  // Safe to use in frontend
};
```

### 2. Create Payment (Using Stripe.js)
```javascript
import Stripe from '@stripe/stripe-js';

const stripePromise = Stripe(publicKey);

// Create payment intent
const response = await fetch('/api/payments/create', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    amount: 2000,  // $20.00
    currency: 'usd'
  })
});

const { clientSecret } = await response.json();

// Use clientSecret to confirm payment
```

---

## Using Stripe Instance in Other Controllers

To process payments in your order or menu controllers:

```javascript
import { getStripeInstance } from '../controllers/stripeController.js';

// In your payment processor
const stripe = await getStripeInstance();

const paymentIntent = await stripe.paymentIntents.create({
  amount: 2000,
  currency: 'usd',
  payment_method: 'pm_xxxxx',
  confirm: true
});
```

---

## Testing with Stripe Test Cards

Use these test card numbers in test mode:

- **Success:** 4242 4242 4242 4242
- **Failure:** 4000 0000 0000 0002
- **3D Secure:** 4000 0025 0000 3155

**Expiry:** Any future date
**CVC:** Any 3-digit number

---

## Webhook Testing (Local Development)

### Option 1: Using Stripe CLI
```bash
# Install Stripe CLI (download from stripe.com/docs/stripe-cli)

# Listen for events
stripe listen --forward-to localhost:5000/api/stripe/webhook

# Trigger test event
stripe trigger payment_intent.succeeded
```

### Option 2: Using Postman
1. Get signing secret from Stripe CLI output
2. Create POST request to `http://localhost:5000/api/stripe/webhook`
3. Add header: `stripe-signature: t=timestamp,v1=signature`
4. Send raw JSON event payload

---

## Troubleshooting

### "ENCRYPTION_KEY not configured"
- Add `ENCRYPTION_KEY=...` to .env file
- Restart backend server

### "Webhook signature verification failed"
- Ensure webhook secret is correct
- Check that raw body parser is configured correctly
- Verify Stripe signature header format

### "Stripe settings not configured"
- Use PUT `/api/stripe/settings` to add settings
- Verify you're logged in as admin

### "Decryption failed"
- Check that ENCRYPTION_KEY hasn't changed
- Old encrypted data won't decrypt with new key
- May need to reconfigure Stripe settings

---

## Production Checklist

- [ ] Use live Stripe keys (pk_ live_ and sk_live_)
- [ ] Set DOMAIN to your production URL
- [ ] Generate strong ENCRYPTION_KEY
- [ ] Store ENCRYPTION_KEY in secure environment variable management
- [ ] Configure webhook endpoint in Stripe dashboard
- [ ] Test webhook delivery in Stripe dashboard
- [ ] Enable HTTPS only
- [ ] Set up error logging and monitoring
- [ ] Back up encryption key securely
- [ ] Create admin user for Stripe settings
- [ ] Test payment flow end-to-end

---

## Additional Resources

- [Stripe Documentation](https://stripe.com/docs)
- [Stripe API Keys](https://dashboard.stripe.com/apikeys)
- [Stripe Webhooks](https://stripe.com/docs/webhooks)
- [Stripe Node.js Library](https://github.com/stripe/stripe-node)

---

## Support

For issues or questions, refer to:
1. Stripe Dashboard - API status and logs
2. Stripe Documentation - Comprehensive guides
3. Backend logs - Check console for errors
4. Webhook logs - Stripe Dashboard > Webhooks > Event logs

---

Created: February 26, 2026
Stack: Node.js + Express + MongoDB
Security Level: Production-Ready ✅
