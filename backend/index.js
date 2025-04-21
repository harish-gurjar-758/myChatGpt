import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 6000;
const MONGODB_URL = process.env.MONGODB_URL;

app.use(express.json());

mongoose.connect(MONGODB_URL)
    .then(() => console.log("✅ Connected to Local MongoDB"))
    .catch((err) => console.error("❌ MongoDB connection error:", err));

app.get('/', (req, res) => {
    res.send('Hello from chatgpt backend!');
});

app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
