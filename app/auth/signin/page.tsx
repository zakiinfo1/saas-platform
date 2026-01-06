"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { signIn } from "next-auth/react"
import { Chrome, Facebook } from "lucide-react"

export default function SignInPage() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Sign In</CardTitle>
                    <CardDescription>
                        Choose your preferred sign in method
                    </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                    <Button variant="outline" onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
                        <Chrome className="mr-2 h-4 w-4" />
                        Google
                    </Button>
                    <Button variant="outline" onClick={() => signIn("facebook", { callbackUrl: "/dashboard" })}>
                        <Facebook className="mr-2 h-4 w-4 text-blue-600" />
                        Facebook
                    </Button>
                </CardContent>
            </Card>
        </div>
    )
}
