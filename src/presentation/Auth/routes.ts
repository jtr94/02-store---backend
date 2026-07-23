import {Router} from 'express';
import { AuthController } from './controller';

export class AuthRoutes{    

    static routes():Router {

        const authController = new AuthController();
        const router = Router();
        
        router.post("/login", authController.login );
        router.post("/register", authController.register );
        router.get("/email-verification/:token", authController.verifyEmail);

        return router;
    }  
}