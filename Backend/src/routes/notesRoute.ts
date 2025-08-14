import express from "express";
import  {getApi}  from "../controllers/notesController";
const router=express.Router();

router.get("/", getApi);
export default router;
