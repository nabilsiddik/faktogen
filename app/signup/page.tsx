import { useId } from "react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default function SignUp() {
    const id = useId()
    return (
        <div className="container mx-auto px-5 flex items-center justify-center min-h-screen">
            <div className=" w-10/12 md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto border-1 shadow-md px-5 py-5 rounded-lg">
                <div className="text-center mb-5">
                    <h1 className="font-bold text-2xl mb-3">Create Account</h1>
                    <p>Enter bellow information and create an account. If you already have an account, <Link href='/login' className="underline">Login Now</Link></p>
                </div>
                <form className="space-y-5">
                    <div className="space-y-4">
                        <div className="*:not-first:mt-2">
                            <Label htmlFor={`${id}-email`}>Email</Label>
                            <Input
                                id={`${id}-email`}
                                placeholder="hi@yourcompany.com"
                                type="email"
                                required
                            />
                        </div>
                        <div className="*:not-first:mt-2">
                            <Label htmlFor={`${id}-password`}>Password</Label>
                            <Input
                                id={`${id}-password`}
                                placeholder="Enter your password"
                                type="password"
                                required
                            />
                        </div>
                    </div>
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
                    <Button type="button" className="w-full">
                        Sign in
                    </Button>
                </form>

                <div className="before:bg-border after:bg-border flex items-center gap-3 before:h-px before:flex-1 after:h-px after:flex-1 my-5">
                    <span className="text-muted-foreground text-xs">Or</span>
                </div>

                <Button variant="outline" className='w-full'>Login with Google</Button>

                <p className="mt-3 text-center">Already have an account? <Link href='/login' className="underline">Login</Link></p>
            </div>
        </div>
    )
}
