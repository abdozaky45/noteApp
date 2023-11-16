import { Router } from "express";
import * as noteController from "./controller/note.js";
const router = Router();
router.post("/add", noteController.addNote);
router.get("/all",noteController.usersNote);
router.put("/:userId/:noteId",noteController.updateNote);
router.delete("/delete/:userId/:noteId",noteController.deleteNote);
export default router;
