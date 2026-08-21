import { UserModel } from "../../data";
import { RegisterDTO } from "../../domain";

export class AuthService{
    constructor(){}

    public async registerUser( regdto: RegisterDTO){
        const exists = await UserModel.findOne({email: regdto.email });        
        if ( exists ) throw new Error('Email already exists!');
    
    try {
      const user = new UserModel(regdto);
      await user.save();      
      return user;
        
    } catch (error) {
        console.log(error);        
        throw new Error(`${error}`);       
    }
    }
}