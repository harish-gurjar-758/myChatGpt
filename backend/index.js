import express from 'express';
import dotenv from 'dotenv';
import connectDB from './src/db/db.js'
import userRoutes from './src/routes/user.routes.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
