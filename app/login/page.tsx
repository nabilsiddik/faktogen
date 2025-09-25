'use client'
import { useId } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { z } from "zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { signIn } from "next-auth/react"

export const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});


export default function Login() {
    const id = useId()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    // handle google login
    const handleSocialLogin = (provider: 'google') => {
        signIn(provider, {
            callbackUrl: '/'
        })
    }

    const onSubmit = async (values: z.infer<typeof loginSchema>) => {
        try{
            const res = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password
            })
            
            console.log('client res', res)
        }catch(error: any){
            console.error(error)
        }
    }

    return (
        <div className="container mx-auto px-5 flex items-center justify-center min-h-screen">
            <div className="w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto border-1 shadow-md px-5 py-5 rounded-lg">
                <div className="text-center mb-5">
                    <h1 className="font-bold text-2xl mb-3">Credential Login</h1>
                    <p>
                        Enter your email and password to login. Don't have an account?{" "}
                        <Link href="/signup" className="underline">
                            Create an Account
                        </Link>
                    </p>
                </div>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel htmlFor={`${id}-email`}>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} id={`${id}-email`} placeholder="hi@yourcompany.com" type="email" />
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
                                    <FormLabel htmlFor={`${id}-password`}>Password</FormLabel>
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
                                <Label htmlFor={`${id}-remember`} className="text-muted-foreground font-normal">
                                    Remember me
                                </Label>
                            </div>
                            <a className="text-sm underline hover:no-underline" href="#">
                                Forgot password?
                            </a>
                        </div>

                        <Button type="submit" className="w-full">
                            Sign in
                        </Button>
                    </form>
                </Form>

                <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1 my-5">
                    <span className="text-muted-foreground text-xs">Or</span>
                </div>

                <Button onClick={() => handleSocialLogin("google")} variant="outline" className="w-full">
                    Login with Google
                </Button>

                <p className="mt-3 text-center">
                    Don't have an account?{" "}
                    <Link href="/signup" className="underline">
                        Create an Account
                    </Link>
                </p>
            </div>
        </div>
    )
}
