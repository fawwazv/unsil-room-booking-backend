import app from './app';
import { env } from './config/env.config';
import prisma from './config/prisma.config';

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log('✅ Database connected successfully');

    app.listen(env.PORT, () => {
      console.log(`🚀 Server is running on ${env.APP_URL}`);
    });
  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();
