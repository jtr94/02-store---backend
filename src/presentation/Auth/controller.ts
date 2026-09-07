import type { Request, Response } from "express";
import { checkSchema, validationResult } from "express-validator";
import { registerSchema } from "../../domain/validator/auth/register.validator";
import { LoginDTO, RegisterDTO } from "../../domain";
import type { AuthService } from "../services/auth.services";


export class AuthController {
    
    constructor(
        public readonly authService : AuthService
    ){} 
    
    public login = (req: Request, res: Response) => {  
        const result = validationResult(req); 
        if (!result.isEmpty()) {
            return res.status(400).json({ errors: result.array() });
        }
        const loginDTO = LoginDTO.create(req.body);
        this.authService.loginUser(loginDTO)     
          .then(user => res.json(user))
          .catch(error => { res.status(400).json({error: error.message})});
    };

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
        const { token } = req.params;        
        this.authService.validateEmail( String(token)  )
          .then( () => res.json("Email succesfully verified!"))
          .catch(error => { res.status(400).json({error: error.message})});
    }

}