import mongoose, { Mongoose, Schema } from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, 'Product name required!'],
        unique: true,
    },
    available:{
        type: Boolean,
        default: false
    },
    description:{
        type: String,
        default: 'Description not available',
    },
    price:{
        type: Number,
        required: [true, 'Price is mandatory!'],        
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    category:{
        type:Schema.Types.ObjectId,
        ref: 'Category',
        require: true,   
    },
});

export const ProductModel = mongoose.model('Product', productSchema);