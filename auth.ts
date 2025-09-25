import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { connectDB } from "./utils/db"
import Google from "next-auth/providers/google"
import { User } from "./app/modules/models/user.models"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                if (!credentials.email || !credentials.password) {
                    console.error('Email or password is missing.')
                    return null
                }

                try {
                    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        }),
                    })

                    if (!res.ok) {
                        console.error('User registration failed', await res.text())
                        return null
                    }

                    console.log('server credtial res', res)
                    
                    const user = await res.json()

                    if(user){
                        return {
                            id: user?._id,
                            name: user?.fullName,
                            email: user?.email,
                            role: user?.role || 'USER'
                        }
                    }
                    else{
                        return null
                    }

                } catch (error: any) {
                    console.error(error)
                }
                
            },
        }),
        Google
    ],
})