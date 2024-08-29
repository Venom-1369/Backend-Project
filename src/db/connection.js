import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);

        console.log(`\nMongoDB Connected! DB Host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error("MongoDB Connection Failed", error);
        process.exit(1); // Exit with failure
    }
};

export default connectDB;
