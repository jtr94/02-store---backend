import { UserModel } from "../../data";
import type { RegisterDTO } from "../../domain";

export class AuthService{
    constructor(){}

    public async registerUser( regdto: RegisterDTO){
        const exists = await UserModel.findOne({email: regdto.email });
        if ( exists ) throw new Error('Email already exists!')
    }
}