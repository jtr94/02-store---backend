import {Router} from 'express';
import { AuthRoutes } from './Auth/routes';
import { checkSchema } from "express-validator";
import { registerSchema } from "../domain/validator/auth/register.validator";

export class AppRoutes{

    static get routes():Router {
        const router = Router();
        router.use( "/api/auth", checkSchema(registerSchema), AuthRoutes.routes());
        
        return router;
    }  
}