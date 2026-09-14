import { envs, jwtAdapter } from "../../config";
import { bcryptAdapter } from "../../config/bcrypt.adapter";
import { UserModel } from "../../data";
import { LoginDTO, RegisterDTO, UserEntity } from "../../domain";
import { EmailService } from "./emailer.services";

export class AuthService{
    constructor(
        private readonly emailService : EmailService,
    ){}

    public async registerUser( regdto: RegisterDTO){
        const exists = await UserModel.findOne({email: regdto.email });        
        if ( exists ) throw new Error('Email already exists!');
    
        try {
                const user = new UserModel(regdto);
                user.password = bcryptAdapter.hash(user.password );
                await user.save();

                await this.sendValidationEmail(user.email);

                const {password, ...userInfo} = UserEntity.fromObject(user);    

                const token = await jwtAdapter.generateToken({id: userInfo.id},"15m");
                if (!token) throw new Error("Error generating token");

                return {user: userInfo, token};        
        } catch (error) {
                console.log(error);        
                throw new Error(`${error}`);       
        }
    }

    public async loginUser( logdto: LoginDTO){
        const user = await UserModel.findOne({ email: logdto.email});
        if (! user) throw new Error("User not found!");       
        const match = bcryptAdapter.compare(logdto.password, user.password);
        if (!match) throw new Error("Verification failed");

        const { password, ...userLogInfo } = UserEntity.fromObject(user); 

        const token = await jwtAdapter.generateToken({id: user.id});
        
        if (!token) throw new Error("An Error has ocurred while token generation");

        return { user: userLogInfo, token };        
    }

    private sendValidationEmail = async (email: string) => {
        const token = await jwtAdapter.generateToken({ email });
        if (!token) throw new Error('Validation token not generated!');

        const link = `${ envs.BASE_URL }api/auth/email-verification/${ token }`;
        const htmlBody = `
            <div> 
                <h1> VALIDATION REQUIRED</h1>
                <p> Please click the next link in order to activate your account</p>
                <a href=${link}> click => ${link} </a>
            </div>
        `;

        const options = {
            to: email,
            subject: 'Email Validation',
            htmlBody,
        };
        
        const isSent =  this.emailService.sendEmail(options);
        if (!isSent) throw new Error('Verification email, failed to send');

        return true;
    }

    async validateEmail(token: string){
        const payload = await jwtAdapter.verifyToken(token);
        if(!payload) throw new Error("Error in email validation!");

        const { email } = payload;
        if(!payload) throw new Error("Email not found!");
        
        await UserModel.updateOne({ email }, {emailValidated: true} )
        return true;
            
};
}