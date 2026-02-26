import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';
import path from 'path';
import { fileURLToPath } from 'url';
import dns from "node:dns/promises";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env vars
dotenv.config({ path: path.join(__dirname, '.env') });

const seedAdmin = async () => {
    try {
        if (!process.env.MONGO_URI) {
            console.error('MONGO_URI is not defined in .env');
            process.exit(1);
        }

        console.log('⏳ Connecting to MongoDB...');
        await mongoose.connect(process.env.MONGO_URI);
        console.log('✅ Connected to MongoDB');

        const adminEmail = 'admin@namaste.com';
        const adminPassword = 'Admin@123';

        const adminExists = await User.findOne({ email: adminEmail });

        if (adminExists) {
            console.log('⚠️ Admin user already exists');
            process.exit(0);
        }

        const admin = await User.create({
            name: 'Super Admin',
            email: adminEmail,
            password: adminPassword,
            role: 'admin'
        });

        if (admin) {
            console.log('✅ Admin user created successfully');
            console.log(`Email: ${adminEmail}`);
            console.log(`Password: ${adminPassword}`);
        } else {
            console.log('❌ Failed to create admin user');
        }

        process.exit(0);
    } catch (error) {
        console.error(`❌ Error seeding admin: ${error.message}`);
        console.error(error.stack);
        process.exit(1);
    }
};

seedAdmin();
