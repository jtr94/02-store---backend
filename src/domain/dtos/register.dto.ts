
export class RegisterDTO{
    constructor(
        public name    : string,
        public email   : string,
        public password: string,
    ){}    

    static create (object: {[keys: string]:any}){
        const { name, email, password } = object

        return new RegisterDTO( name, email, password );
    }
}