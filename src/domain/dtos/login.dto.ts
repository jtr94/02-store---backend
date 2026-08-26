
export class LoginDTO {
    constructor(
        public email: string,
        public password: string,
    ){}

    static create (object: {[key : string]:any}){
        const { email, password } = object;        
        return new LoginDTO(String(email).toLowerCase(), password); 
    };
}