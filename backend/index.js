import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import userRoutes from './src/routes/user.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
const connectToMongoDB = async () => {
  const connection = await mongoose.connect(process.env.MONGODB_URL).catch(err => err);

  if (connection instanceof mongoose.Mongoose) {
    console.log("✅ Connected to MongoDB Atlas");

    app.get('/', (req, res) => {
      res.send('API is running...');
    });

  } else {
    console.error("❌ MongoDB connection error:", connection);
  }
};
connectToMongoDB();
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
