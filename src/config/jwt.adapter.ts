import jwt from "jsonwebtoken"
import { envs } from "./envs"

const JWT_SEED = envs.JWT_SEEDER;

interface Payload {
    email: string,
    iat: number, 
    exp: number 
};

export const jwtAdapter = {
    async generateToken(payload: any, duration: any = "1h")
    {   
        return new Promise((resolve) =>{
            jwt.sign(payload , JWT_SEED,{ expiresIn: duration },  function (err:any, token:any){
               if (err) return resolve(null);
               resolve(token);          
           })
        })
    },

    async verifyToken(token: string) : Promise<Payload | null>{
        return new Promise((resolve, reject) => {
            jwt.verify(token, JWT_SEED, function (err:any, validation:any) {
               if(err){
                   resolve(null);
                }              
                resolve(validation);
            })
        })
                
      
                       
        
    }
}