import { Request, Response } from "express";
import validate from "../utilities/validation.utility";
import authServices from "../services/auth.services";

class AuthControllers {
    public async login(req: Request, res: Response) {
        res.send(req.body);
    }

    public async signup(req: Request, res: Response) {
        validate.signUp(req.body);
        const studentDetails = await authServices.signUp(req.body);
        res.send(studentDetails)
    }
}

export default AuthControllers;