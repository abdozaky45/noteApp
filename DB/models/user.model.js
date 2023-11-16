import mongoose, { Schema, model } from "mongoose";
const userSchema = new Schema(
  {
    firstName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    age: Number,
    phone: String,
    confirmEmail: { type: Boolean, default: false },
    gender: { type: String, enum: ["male", "Female"], default: "male" },
  },
  { timestamps: true }
);
const userModel = mongoose.models.User || model("User", userSchema);
export default userModel;
