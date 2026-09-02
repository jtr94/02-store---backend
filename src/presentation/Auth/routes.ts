import {Router} from 'express';
import { AuthController } from './controller';
import { checkSchema } from "express-validator";
import { registerSchema, loginSchema } from "../../domain/";
import { AuthService, EmailService } from '../services';
import { envs } from '../../config';

export class AuthRoutes{    

    static routes():Router {
        
        const emailService = new EmailService(envs.MAILERSERVICE,
                                              envs.MAILERUSER,
                                              envs.MAILERPASS,
                                );
        const authService = new AuthService(emailService);
        const authController = new AuthController(authService);
        const router = Router();
        
        router.post("/login", checkSchema(loginSchema), authController.login );
        router.post("/register", checkSchema(registerSchema), authController.register );
        router.get("/email-verification/:token", authController.verifyEmail);

        return router;
    }  
}