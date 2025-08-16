import { Request, Response } from "express";
import { NextFunction } from "express";
import ratelimit from "../config/upstash";

const rateLimiter = async (req: Request, res: Response, next: NextFunction) => {
  try {
    //my-limit-key should be changed later with user id or ip 
    const { success } = await ratelimit.limit("my-limit-key");

    if (!success) {
      res
        .status(429)
        .json({ message: "Too many requests, please try again later." });
    }
    next();
  } catch (error) {
    console.error("Rate limiter error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
export default rateLimiter;
