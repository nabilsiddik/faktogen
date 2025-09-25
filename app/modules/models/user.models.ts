import mongoose from "mongoose";
import { UserRoles, UserStatus } from "../interfaces/user.interfaces";

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
    timestamps: false,
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
    role: {
        type: String,
        enum: Object.values(UserRoles)
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