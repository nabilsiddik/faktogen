'use server'
import { auth, signIn } from "@/auth"

export const userLogin = async(formData: FormData) => {
    const rest = await signIn('credentials', formData)

}