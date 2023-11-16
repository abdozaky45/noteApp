import { Router } from "express"; // sup routing
import *as userController from "./controller/user.js";
const router = Router();
router.post("/register",userController.signUp);
router.post("/login",userController.login)
router.post("/insert",userController.insert);
router.get("/",userController.getAllUser);
router.put("/:_id",userController.updateUser);
export default router;
