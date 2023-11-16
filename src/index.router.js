import connectDB from "../DB/connection.js";
import noteRouter from "./modules/note/note.Router.js";
import userRouter from "./modules/user/user.router.js";

const bootstrap = (app, express) => {
  app.use(express.json()); // Buffer Data
  app.use("/user", userRouter);
  app.use("/note", noteRouter);
  app.use("*", (req, res, next) => {
    return res.json({ message: "in-valid Routing" });
  });
  connectDB();
};
export default bootstrap;
