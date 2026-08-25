import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required'],
    },
    email:{
        type: String,
        required: [true, 'Email required'],
        unique: true,
    },
    password:{
        type: String,
        required: [true, 'Password required'],
    },
    emailValidated: {
        type: Boolean,
        default: false,
    },
    img: {
        type: String,
    },
    role: {
        type: [String],
        enum: ['ADMIN', 'USER', 'GUEST'],
        default: ['USER'],
    }
});

export const UserModel = mongoose.model('User', userSchema);