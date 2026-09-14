import mongoose, { Schema } from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Category name required'],        
        unique: true,
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: true,
    },
});

export const CategoryModel = mongoose.model('Category', categorySchema);