import { Request,Response } from "express";
export const getNotes = (req: Request,res: Response)=>{
    res.send("Notes API is running...");
} 
