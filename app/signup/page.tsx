'use client'

import { useId } from "react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import z from 'zod'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { createAccount } from "../actions/createAccount"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export const signUpSchema = z.object({
    fullName: z.string().min(3, "Full name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters")
});


export default function SignUp() {
    const id = useId()
    const router = useRouter()

    const form = useForm<z.infer<typeof signUpSchema>>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
        },
    })

    async function onSubmit(values: z.infer<typeof signUpSchema>) {
        try {
            const res = await createAccount(values)
            console.log(res?.data?._id)
            if(res?.success){
                toast.success('Account created Successfully.')
                router.push('/login')
            }
        } catch (error: unknown) {
            console.error(error)
            toast.error('Something went wrong while account creation')
        }
    }

    return (
        <div className="container mx-auto px-5 flex items-center justify-center min-h-screen">
            <div className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto border-1 shadow-md px-5 py-5 rounded-lg">
                <div className="text-center mb-5">
                    <h1 className="font-bold text-2xl mb-3">Create Account</h1>
                    <p>
                        Enter the information below to create an account. Already have an
                        account?{" "}
                        <Link href="/login" className="underline">
                            Login Now
                        </Link>
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-fullName`}>
                                        Full Name <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} id={`${id}-fullName`} placeholder="Full Name" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-email`}>
                                        Email <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} id={`${id}-email`} type="email" placeholder="example@gmail.com" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-password`}>
                                        Password <span className="text-red-500">*</span>
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} id={`${id}-password`} type="password" placeholder="Enter your password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <div className="flex justify-between gap-2">
                            <div className="flex items-center gap-2">
                                <Checkbox id={`${id}-remember`} />
                                <Label
                                    htmlFor={`${id}-remember`}
                                    className="text-muted-foreground font-normal"
                                >
                                    Remember me
                                </Label>
                            </div>
                            <a className="text-sm underline hover:no-underline" href="#">
                                Forgot password?
                            </a>
                        </div>

                        <Button type="submit" className="w-full">
                            Sign Up
                        </Button>
                    </form>
                </Form>

                <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1 my-5">
                    <span className="text-muted-foreground text-xs">Or</span>
                </div>

                <Button variant="outline" className="w-full">
                    Login with Google
                </Button>

                <p className="mt-3 text-center">
                    Already have an account?{" "}
                    <Link href="/login" className="underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    )
}
