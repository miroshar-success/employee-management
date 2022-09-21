import mongoose from "mongoose";

const connectionDB = async (): Promise<void> => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL as string);
    console.log(`MongoDB Connected: ${db.connection.host}`);
  } catch (error: any) {
    console.log(`MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectionDB;
