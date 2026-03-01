import mongoose from 'mongoose';

const stripeSettingsSchema = new mongoose.Schema(
    {
        publicKey: {
            type: String,
            required: [true, 'Public key is required'],
            trim: true,
            // Store in plain text since it's publicly available
            validate: {
                validator: function (v) {
                    return v.startsWith('pk_test_') || v.startsWith('pk_live_');
                },
                message: 'Public key must start with pk_test_ or pk_live_'
            }
        },
        secretKey: {
            type: String,
            required: [true, 'Secret key is required'],
            // Stored encrypted in database
        },
        webhookUrl: {
            type: String,
            // Auto-generated, can be set manually if needed
            default: function () {
                const domain = process.env.DOMAIN || 'http://localhost:5000';
                return `${domain}/api/stripe/webhook`;
            }
        },
        webhookSecret: {
            type: String,
            required: [true, 'Webhook secret is required'],
            // Stored encrypted in database
        },
        isLive: {
            type: Boolean,
            default: false,
            // true for pk_live/sk_live, false for pk_test/sk_test
        },
        isEnabled: {
            type: Boolean,
            default: true
        },
        updatedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        createdAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        }
    },
    {
        timestamps: true
    }
);

// Only allow one document in this collection (singleton pattern)
stripeSettingsSchema.statics.findOrCreateSettings = async function () {
    let settings = await this.findOne();
    if (!settings) {
        settings = await this.create({
            publicKey: '',
            secretKey: '',
            webhookSecret: ''
        });
    }
    return settings;
};

const StripeSettings = mongoose.model('StripeSettings', stripeSettingsSchema);

export default StripeSettings;
