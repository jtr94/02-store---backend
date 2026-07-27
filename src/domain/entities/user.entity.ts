export class UserEntity{
    constructor(
        public readonly name: string,
        public readonly email: string,
        public readonly emailValidated: boolean,
        public readonly role: string[],
        public readonly img?: string,
    ){}
}