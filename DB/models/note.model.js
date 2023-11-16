import mongoose, { Schema, model, Types } from "mongoose";
const noteSchema = new Schema(
  {
    title: { type: String, required: true },
    des: { type: String, required: true },
    userId: { type: Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);
const noteModel = mongoose.models.Note || model("Note", noteSchema);
export default noteModel;
