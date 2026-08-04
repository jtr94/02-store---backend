import type { Schema } from "express-validator"

export const registerSchema: Schema = {
    name: {
        isString:{
            errorMessage: "Name must have a valid format",
        },
        trim: true,
        isLength: {
            options:{min: 3},
            errorMessage: "Name must be provided"
        },
        escape: true,
        
    },
    email:{
        isEmail: {
            errorMessage: "Email must have a valid format",
        },
        normalizeEmail: true
    },
    password: {
        isString:{
            errorMessage: "Provide a valid password",
        },
        isLength: {
            options:{min: 8},
            errorMessage: "Password should be at least 8 chars",
        }
    }
} 
