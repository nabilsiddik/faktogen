import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"
import { connectDB } from "./utils/db"
import Google from "next-auth/providers/google"
import { User } from "./app/modules/models/user.models"
import { IUser } from "./interfaces/user.interface"

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

                    const parsedResponse = await res.json()
                    const user = parsedResponse.data

                    console.log('my user', user)

                    if (user) {
                        return {
                            id: user?._id,
                            name: user?.fullName,
                            email: user?.email,
                            role: user?.role || 'USER',
                            image: user?.picture
                        }
                    }

                    return null


                } catch (error: any) {
                    console.error(error)
                    return null
                }

            },
        }),
        Google
    ],
    callbacks: {
        async jwt({token, user}){
            if(user){
                token.id = user.id,
                // @ts-ignore
                token.role = user.role
            }
            return token
        },
        async session({session, token}){
            if(session?.user){
                session.user.id = token?.id as string
                // @ts-ignore
                session.user.role = token.role
            }
            return session
        }
    }
})