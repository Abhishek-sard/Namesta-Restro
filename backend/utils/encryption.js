import crypto from 'crypto';

// Use a strong encryption key from environment variable
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY;

if (!ENCRYPTION_KEY) {
    console.error('⚠️  WARNING: ENCRYPTION_KEY is not set in .env file');
    console.error('Please add ENCRYPTION_KEY=<32-character-hex-string> to your .env file');
    console.error('Generate one with: node -e "console.log(require(\'crypto\').randomBytes(16).toString(\'hex\'))"');
}

/**
 * Encrypts sensitive data using AES-256-GCM
 * @param {string} text - Text to encrypt
 * @returns {string} - Encrypted text with IV and auth tag
 */
export const encryptSecret = (text) => {
    if (!ENCRYPTION_KEY) {
        throw new Error('ENCRYPTION_KEY not configured');
    }

    try {
        const iv = crypto.randomBytes(16);
        const key = Buffer.from(ENCRYPTION_KEY, 'hex');
        
        const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        const authTag = cipher.getAuthTag();
        
        // Combine IV, auth tag, and encrypted data
        return `${iv.toString('hex')}:${authTag.toString('hex')}:${encrypted}`;
    } catch (error) {
        throw new Error(`Encryption failed: ${error.message}`);
    }
};

/**
 * Decrypts encrypted data
 * @param {string} encryptedText - Encrypted text with IV and auth tag
 * @returns {string} - Decrypted text
 */
export const decryptSecret = (encryptedText) => {
    if (!ENCRYPTION_KEY) {
        throw new Error('ENCRYPTION_KEY not configured');
    }

    try {
        const parts = encryptedText.split(':');
        if (parts.length !== 3) {
            throw new Error('Invalid encrypted text format');
        }

        const iv = Buffer.from(parts[0], 'hex');
        const authTag = Buffer.from(parts[1], 'hex');
        const encrypted = parts[2];
        const key = Buffer.from(ENCRYPTION_KEY, 'hex');

        const decipher = crypto.createDecipheriv('aes-256-gcm', key, iv);
        decipher.setAuthTag(authTag);
        
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        return decrypted;
    } catch (error) {
        throw new Error(`Decryption failed: ${error.message}`);
    }
};

/**
 * Generate a secure encryption key
 * @returns {string} - 32-character hex string
 */
export const generateEncryptionKey = () => {
    return crypto.randomBytes(16).toString('hex');
};
