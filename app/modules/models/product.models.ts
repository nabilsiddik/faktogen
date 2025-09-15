import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    featuredImage: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
    },
    longDescription: {
        type: String,
    },
    category: {
        type: String,
        required: true,
    },
    oldPrice: {
        type: Number,
    },
    price: {
        type: Number,
        required: true,
    },
    features: {
        type: Map,
        of: String,
        default: {}
    }
}, {
    timestamps: true,
    versionKey: false
})

export default mongoose.models.Product || mongoose.model('Product', productSchema)