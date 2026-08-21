import type { Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { registerSchema } from "../../domain/validator/auth/register.validator";
import { RegisterDTO } from "../../domain";
import type { AuthService } from "../services/auth.services";


export class AuthController {
    
    constructor(
        public readonly authService : AuthService
    ){} 
    
    public login = (req: Request, res: Response) => {        
        res.json("Login");
    }

    public register = (req: Request, res: Response) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        const registerDTO = RegisterDTO.create(req.body);
        this.authService.registerUser(registerDTO!)
          .then(user => res.json(user))
          .catch(error => { res.status(400).json({error: error.message})});
    }

    public verifyEmail = (req: Request, res: Response) => {
        res.json("verifyEmail");
    }

}