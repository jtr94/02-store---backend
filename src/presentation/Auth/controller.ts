import type { Request, Response } from "express";


export class AuthController {
    
    constructor(){} 
    
    public login (req: Request, res: Response) {
        res.json("Login");
    }

    public register (req: Request, res: Response) {
        res.json("register");
    }

    public verifyEmail (req: Request, res: Response) {
        res.json("verifyEmail");
    }

}