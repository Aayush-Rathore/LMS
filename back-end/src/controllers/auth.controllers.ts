import { Request, Response } from "express";

class AuthControllers {
    public async login(req: Request, res: Response) {
        res.send(req.body);
    }

    public async signup(req: Request, res: Response) {
        console.log(req.body);
        res.send(req.body)
    }
}

export default AuthControllers;