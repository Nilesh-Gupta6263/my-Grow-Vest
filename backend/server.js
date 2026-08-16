import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import stockRoutes from './routes/stockRoutes.js';
import watchlistRoutes from './routes/watchlistRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import activityRoutes from './routes/activityRoutes.js';
import profileRoutes from './routes/profileRoutes.js';
import { connectDatabase } from './config/database.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => res.json({ message: 'GrowVest API is running.' }));

app.use(async (req, res, next) => {
  if (!process.env.JWT_SECRET) {
    const error = new Error('JWT_SECRET environment variable is required.');
    error.status = 500;
    return next(error);
  }

  try {
    await connectDatabase();
    next();
  } catch (error) {
    next(error);
  }
});

app.use('/api/auth', authRoutes);
app.use('/api/stocks', stockRoutes);
app.use('/api/watchlist', watchlistRoutes);
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/activities', activityRoutes);
app.use('/api/profile', profileRoutes);
app.use(notFound);
app.use(errorHandler);

if (!process.env.VERCEL) {
  const port = process.env.PORT || 5000;

  connectDatabase()
    .then(() => app.listen(port, () => console.log(`GrowVest API running on port ${port}`)))
    .catch((error) => {
      console.error('MongoDB connection failed:', error.message);
      process.exit(1);
    });
}

export default app;
