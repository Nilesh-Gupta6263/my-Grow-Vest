import mongoose from 'mongoose';

let connectionPromise;

export async function connectDatabase() {
  if (mongoose.connection.readyState === 1) return mongoose.connection;

  if (!process.env.MONGODB_URI) {
    const error = new Error('MONGODB_URI environment variable is required.');
    error.status = 500;
    throw error;
  }

  if (!connectionPromise) {
    connectionPromise = mongoose.connect(process.env.MONGODB_URI)
      .catch((error) => {
        connectionPromise = undefined;
        throw error;
      });
  }

  return connectionPromise;
}
