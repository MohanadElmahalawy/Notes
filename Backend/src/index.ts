import express from 'express';
import notesRoute from './routes/notesRoute';
import { connectDB } from './config/db'
import dotenv from "dotenv";

dotenv.config();

const app=express();
const PORT=process.env.PORT || 5000;
connectDB();

app.use("/api/notes", notesRoute);

app.listen(PORT,()=>{
    console.log("server started at port",PORT);
})
