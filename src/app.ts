import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { env } from './config/env.config';
import { errorMiddleware } from './middlewares/error.middleware';

const app: Application = express();

app.use(cors({
  origin: env.CORS_ORIGIN.split(','),
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get('/api/health', (req: Request, res: Response) => {
  res.status(200).json({ success: true, message: 'Server is healthy' });
});

// 404 Handler
app.use((req: Request, res: Response) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

// Global Error Handler
app.use(errorMiddleware);

export default app;
