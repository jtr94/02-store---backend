import {Router} from 'express';
import { AuthController } from './controller';
import { checkSchema } from "express-validator";
import { registerSchema } from "../../domain/";

export class AuthRoutes{    

    static routes():Router {

        const authController = new AuthController();
        const router = Router();
        
        router.post("/login", checkSchema(registerSchema), authController.login );
        router.post("/register", authController.register );
        router.get("/email-verification/:token", authController.verifyEmail);

        return router;
    }  
}