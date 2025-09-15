import mongoose from "mongoose";

let isConnected = false

export const connectDB = async () => {
    if (isConnected) {
        return
    }
    try {
        const db = await mongoose.connect(process.env.MONGODB_URI as string)

        isConnected = db.connections[0].readyState === 1
    } catch (error) {
        console.log('Error while mongodb connection', error)
        throw new Error('MongoDB Connection failed')
    }
}