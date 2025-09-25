'use server'
import { signUpSchema } from './../signup/page';
import z from 'zod'

export const createAccount = async (userData: z.infer<typeof signUpSchema>) => {
    const modifiedUser = {
        ...userData,
        role: 'USER'
    }

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedUser),
    })

    if (!res.ok) {
        console.error('User registration failed', await res.text())
    }

    return await res.json()

}


export const login = async (userData: z.infer<typeof signUpSchema>) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData),
    })

    if (!res.ok) {
        console.error('User registration failed', await res.text())
    }

    return await res.json()
} 