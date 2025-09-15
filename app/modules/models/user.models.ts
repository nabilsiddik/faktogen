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
    }
})

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
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

export default mongoose.models.User || mongoose.model('User', userSchema)