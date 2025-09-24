import mongoose from "mongoose";
import { UserStatus } from "../interfaces/user.interfaces";

const cartItemSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        default: 1
    },
},{
    timestamps: true,
    versionKey: false
})

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
    },
    cart: [cartItemSchema],
    wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: 'Product'}],
    status: {
        type: String,
        enum: Object.values(UserStatus)
    },
    isVerified: {
        type: Boolean,
        default: false
    }
    
}, {
    timestamps: true,
    versionKey: false
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)