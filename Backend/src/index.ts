import express from "express";
import notesRoute from "./routes/notesRoute";
import { connectDB } from "./config/db";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter";

dotenv.config();

const app = express();
app.use(express.json()); // Middleware to parse JSON bodies
app.use(rateLimiter);//Middleware to limit the request 

const PORT = process.env.PORT || 5000;

app.use("/api/notes", notesRoute);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("server started at port", PORT);
  });
});
