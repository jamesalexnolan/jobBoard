import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || '';

let isConnected = false; 

async function connectToDatabase() {
  if (isConnected) {
    return; 
  }

  try {
    // Connecting to MongoDB
    await mongoose.connect(MONGODB_URI, {
      // Removed deprecated options: useNewUrlParser and useUnifiedTopology
    });
    isConnected = true;
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
}

export default connectToDatabase;
