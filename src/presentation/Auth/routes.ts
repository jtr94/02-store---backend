import {Router} from 'express';
import { AuthController } from './controller';
import { checkSchema } from "express-validator";
import { registerSchema } from "../../domain/";
import { AuthService } from '../services/auth.services';

export class AuthRoutes{    

    static routes():Router {

        const authService = new AuthService();
        const authController = new AuthController(authService);
        const router = Router();
        
        router.post("/login", checkSchema(registerSchema), authController.login );
        router.post("/register", checkSchema(registerSchema), authController.register );
        router.get("/email-verification/:token", authController.verifyEmail);

        return router;
    }  
}