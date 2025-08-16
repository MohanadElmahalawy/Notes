import { Request,Response } from "express";
import Note from "../models/Note";
export const getNotes = async (req: Request,res: Response)=>{
    try{
        const notes = await Note.find({});
        res.status(200).json(notes);
    }
    catch(error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Internal server error" });

    }
    
} 
export const createNotes= async (req:Request,res:Response)=>{
   try{
    const {title,content} = req.body;
    const newNote = new Note({title,content});
    const savedNote=await newNote.save();
    res.status(201).json(savedNote);

   }
   catch(error){
    console.error("Error creating note:", error);
    res.status(500).json({ message: "Internal server error" });

   }
}
