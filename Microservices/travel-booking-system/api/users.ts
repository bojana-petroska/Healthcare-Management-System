import { VercelRequest, VercelResponse } from '@vercel/node';
import { app, connectDB } from '../src/user-service/server.js';

export default async (req: VercelRequest, res: VercelResponse) => {
  await connectDB(); // Ensure database connection
  await app(req, res); // Pass request to Express app
};
