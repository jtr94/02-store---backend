import jwt from "jsonwebtoken"
import { envs } from "./envs"

const JWT_SEED = envs.JWT_SEEDER;

export const jwtAdapter = {
    async generateToken(payload: any, duration:string = "1h")
    {   
        return new Promise((resolve) =>{
            jwt.sign(payload , JWT_SEED,{expiresIn: duration},  function (err:any, token:any){
               if (err) return resolve(null);
               resolve(token);          
           })
        })
    }
}