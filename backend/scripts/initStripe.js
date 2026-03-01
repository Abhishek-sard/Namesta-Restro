import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from 'node:dns/promises';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars FIRST
dotenv.config({ path: path.join(__dirname, '../.env') });

// Setup DNS for Atlas connectivity
dns.setServers(["8.8.8.8", "1.1.1.1"]);


const initStripe = async () => {
    try {
        // Load app modules dynamically AFTER dotenv.config
        const { default: connectDB } = await import('../config/db.js');
        const { default: StripeSettings } = await import('../models/StripeSettings.js');
        const { encryptSecret } = await import('../utils/encryption.js');

        await connectDB();

        const publicKey = process.env.STRIPE_PUBLIC_KEY;
        const secretKey = process.env.STRIPE_SECRET_KEY;
        const webhookSecret = 'whsec_placeholder'; // User will need to update this from Stripe Dashboard
        const domain = process.env.DOMAIN || 'http://localhost:5000';

        if (!publicKey || !secretKey) {
            console.error('❌ Error: STRIPE_PUBLIC_KEY or STRIPE_SECRET_KEY missing in .env');
            process.exit(1);
        }

        console.log('🔐 Encrypting Stripe keys...');
        const encryptedSecretKey = encryptSecret(secretKey);
        const encryptedWebhookSecret = encryptSecret(webhookSecret);

        console.log('💾 Saving settings to database...');

        // Upsert logic
        let settings = await StripeSettings.findOne();

        if (!settings) {
            settings = new StripeSettings({
                publicKey,
                secretKey: encryptedSecretKey,
                webhookSecret: encryptedWebhookSecret,
                webhookUrl: `${domain}/api/stripe/webhook`,
                isLive: publicKey.startsWith('pk_live_'),
                isEnabled: true
            });
        } else {
            settings.publicKey = publicKey;
            settings.secretKey = encryptedSecretKey;
            settings.webhookSecret = encryptedWebhookSecret;
            settings.webhookUrl = `${domain}/api/stripe/webhook`;
            settings.isLive = publicKey.startsWith('pk_live_');
            settings.isEnabled = true;
        }

        await settings.save();

        console.log('✅ Stripe settings initialized successfully!');
        console.log('-------------------------------------------');
        console.log(`Public Key: ${settings.publicKey}`);
        console.log(`Webhook URL: ${settings.webhookUrl}`);
        console.log(`Environment: ${settings.isLive ? 'LIVE' : 'TEST'}`);
        console.log('-------------------------------------------');
        console.log('⚠️  NOTE: Webhook secret is currently a placeholder.');
        console.log('Please update it via the Admin Dashboard or directly in the DB once configured in Stripe.');

        process.exit(0);
    } catch (error) {
        console.error('❌ Error initializing Stripe:', error);
        process.exit(1);
    }
};

initStripe();
