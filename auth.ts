import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { connectDB } from "./utils/db"
import { User } from "./app/modules/models/user.models"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                await connectDB()
                const user = await User.findOne({email: credentials?.email})

                if (!user) {
                    throw new Error("Invalid credentials.")
                }

                const isPasswordMatch = await bcrypt.compare(credentials?.password as string, user?.password)

                if(!isPasswordMatch){
                    throw new Error("Password is not valid.")
                }

                return {
                    id: user?._id.toString(),
                    email: user?.email,
                    name: user?.fullName
                }
            },
        }),
    ],
})