import { Router } from "express";
import AuthControllers from "../controllers/auth.controllers"
import asyncHandler from "../utilities/asyncHandler.utility"

const authRouter = Router();
const authControllers = new AuthControllers()

authRouter.route("/signin").post(asyncHandler(authControllers.login))
authRouter.route("/signup").post(asyncHandler(authControllers.signup))

export default authRouter;