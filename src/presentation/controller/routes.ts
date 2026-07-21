import {Router} from 'express';

export class UserRoutes{

    private routes():Router {
        const router = Router();

        router.get("users/", (req, res) => { res.json("Hello!") })

        return router;
    }  
}