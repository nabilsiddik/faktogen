import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';
import Stream from 'stream';

cloudinary.config({ 
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
    api_key: process.env.CLOUDINARY_API_KEY, 
    api_secret: process.env.CLOUDINARY_API_SECRET 
})

// Upload buffer to cloudinary
export const uploadBufferToCloudinary = async (buffer: Buffer, fileName: string): Promise<UploadApiResponse | undefined> => {
    try {
        return new Promise((resolve, reject) => {
            const publicId = `products/${fileName}-${Date.now()}`
            const bufferStream = new Stream.PassThrough()
            bufferStream.end(buffer)

            cloudinary.uploader.upload_stream({
                resource_type: 'auto',
                public_id: publicId,
                folder: 'products'
            }, (error, result) => {
                if (error) {
                    return reject(error)
                }
                resolve(result)
            }).end(buffer)
        })
    } catch (error: any) {
        console.log(error)
    }
}

export const cloudinaryUpload = cloudinary