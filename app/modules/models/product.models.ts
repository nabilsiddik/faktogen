import mongoose from "mongoose";


const featureSchema = new mongoose.Schema({
    key: {type: String, required: true},
    value: {
        type: mongoose.Schema.Types.Mixed,
        required: true,
        validate: {
            validator: (v: unknown) => typeof v === 'string' || typeof v === 'number',
            message: "Value must be either a string or a number"
        }
    }
})

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
        type: [featureSchema],
        default: []
    },
}, {
    timestamps: true,
    versionKey: false
})

export const Product = mongoose.models.Product || mongoose.model('Product', productSchema)