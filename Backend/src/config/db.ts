import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async ()=>{
    try{
        const MONGOURL = process.env.MONGO_URL;
        await mongoose.connect(MONGOURL);
        console.log("MongoDB connected successfully");
    }
    catch(error){
        console.error("MongoDB connection failed:", error);
        process.exit(1); // Exit the process with failure

    }

}