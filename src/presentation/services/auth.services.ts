import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { UserModel } from "../../data";
import { LoginDTO, RegisterDTO, UserEntity } from "../../domain";

export class AuthService{
    constructor(){}

    public async registerUser( regdto: RegisterDTO){
        const exists = await UserModel.findOne({email: regdto.email });        
        if ( exists ) throw new Error('Email already exists!');
    
    try {
      const user = new UserModel(regdto);
      
      user.password = bcryptAdapter.hash(user.password );
      await user.save();
      
      const {password, ...userInfo} = UserEntity.fromObject(user);      
      return {...userInfo};        
    } catch (error) {
        console.log(error);        
        throw new Error(`${error}`);       
    }
    }

    public async loginUser( logdto: LoginDTO){
        console.log(logdto.email);
        const user = await UserModel.findOne({ email: logdto.email});
        console.log(user);
        
        if (! user) throw new Error("User not found!");       
        const match = bcryptAdapter.compare(logdto.password, user.password);
        if (!match) throw new Error("Verification failed");

        const { password, ...userLogInfo } = UserEntity.fromObject(user); 
        return { ...userLogInfo, token: 1234 };        
    }
};