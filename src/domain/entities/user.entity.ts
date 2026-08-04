export class UserEntity{
    constructor(
        public readonly id: string,
        public readonly name: string,
        public readonly email: string,
        public readonly emailValidated: boolean,
        public readonly role: string[],
        public readonly img?: string,
    ){}

    static fromObject(object: {[key: string]:any}){
        const {id, _id, name, email, emailValidated, role, img } = object;
        if (!id && !_id) throw new Error('Id is mandatory');
        if (!name) throw new Error('name is mandatory');
        if (!email) throw new Error('Email is mandatory');
        if (emailValidated === undefined) throw new Error('missing Validation');
        if (!role) throw new Error('Role is mandatory');


        return new UserEntity(id || _id, name, email, emailValidated, role, img);

    }
}