import noteModel from "../../../../DB/models/note.model.js";
import userModel from "../../../../DB/models/user.model.js";

export const addNote = async (req, res, next) => {
  const { title, des, userId } = req.body;
  const user = await userModel.findById(userId);
  if (!user) return res.json({ Message: "In-Valid UserId" });
  const note = await noteModel.create({ title, des, userId });
  return res.json({ Message: "add note", note });
};
export const usersNote = async (req, res, next) => {
  const note = await noteModel.find({}).populate([
    {
      path: "userId",
      select: "-_id firstName email gender",
    },
  ]);
  return res.json({ message: "getAllNotes", note });
};
export const updateNote = async (req, res, next) => {
  const { title, des } = req.body;
  const note = await noteModel.findOneAndUpdate(
    { userId: req.params.userId, _id: req.params.noteId },
    { title, des }
  );
  if (!note) return res.json({ Message: "In-valid userId Or noteId" });
  return res.json({ Message: "note updated", note });
};
export const deleteNote = async (req, res, next) => {
  const note = await noteModel.findOneAndDelete({
    userId: req.params.userId,
    _id: req.params.noteId,
  });
  if (!note) return res.json({ Message: "In-valid userId Or noteId" });
  return res.json({ Message: "note deleted", note });
};
