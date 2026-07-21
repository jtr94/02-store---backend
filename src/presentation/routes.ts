import {Router} from 'express';

export class AppRoutes{

    static get routes():Router {
        const router = Router();
        router.use( "/users", (req, res) => { res.json("Hello!") })
        //router.get("users/", (req, res) => { res.json("Hello!") })
        return router;
    }  
}