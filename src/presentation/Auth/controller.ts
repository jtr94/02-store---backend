import type { Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { registerSchema } from "../../domain/validator/auth/register.validator";


export class AuthController {
    
    constructor(){} 
    
    public login (req: Request, res: Response) {        
        res.json("Login");
    }

    public register (req: Request, res: Response) {
        const result = validationResult(req);
        if (result.isEmpty()) {
            return res.json("register");
        }
        res.status(401).json({ errors: result.array() });
    }

    public verifyEmail (req: Request, res: Response) {
        res.json("verifyEmail");
    }

}