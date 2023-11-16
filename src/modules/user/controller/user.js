import userModel from "../../../../DB/models/user.model.js";
export const insert = async (req, res, next) => {
  try {
    const { firstName, email, password, age, phone, gender } = req.body;
    // const user = await userModel.create({
    //   firstName,
    //   email,
    //   password,
    //   age,
    //   phone,
    //   gender,
    // });
    const user = await userModel.create([
      { firstName, email, password, age, phone, gender }
    ]);
    return res.json({ Message: "{}", user });
  } catch (error) {
    return res.json({
      Message: "Error",
      error
    });
  }
};
export const getAllUser = async (req, res, next) => {
  const user = await userModel.find({}).select(" firstName email age phone");
  return res.json({ user });
};
export const updateUser = async (req, res, next) => {
  const { age, phone } = req.body;
  const user = await userModel.findByIdAndUpdate(
    { _id: req.params._id },
    { age, phone },
    { new: true }
  );
  return res.json({ Message: "updated user", user });
};
export const signUp = async (req, res, next) => {
  const { firstName, email, password, confirmPassword } = req.body;
  if (password != confirmPassword)
    return res.json({ Message: "password Not match Confirm Password" });
  const ExistUser = await userModel.findOne({ email });
  if (ExistUser) return res.json({ Message: "Email is Exist" });
  const user = await userModel.create({ firstName, email, password });
  return res.json({ Message: "inserted User", user });
};
export const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email, password }); // {} , null
  if (!user) return res.json({ Message: "In-Valid email or password" });
  return res.json({ Message: "/Login", user });
};
