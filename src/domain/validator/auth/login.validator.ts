import type { Schema } from "express-validator";

export const loginSchema: Schema ={
    email:{
        isEmail:{
            errorMessage: "Type a valid email",
        },
    },
    password:{
        isString:{
            errorMessage: "Must be string type",
        },
    }
}