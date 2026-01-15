import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, LogIn } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col bg-background">
            {/* Navbar */}
            <nav className="flex items-center justify-between p-6 border-b">
                <div className="font-bold text-xl">
                    SaaS Platform <span className="text-sm font-normal text-muted-foreground ml-2">v0.1.0</span>
                </div>
                <div className="flex gap-4">
                    <Link href="/auth/signin">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <LogIn className="h-4 w-4" />
                            Sign In
                        </Button>
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="flex-1 flex flex-col items-center justify-center p-8 text-center space-y-8 max-w-5xl mx-auto">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Your Complete SaaS Solution
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        Manage clients, products, and sales with AI-powered insights.
                        Multi-language support and seamless integrations.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/dashboard">
                        <Button size="lg" className="gap-2 text-lg h-12 px-8">
                            <LayoutDashboard className="h-5 w-5" />
                            Go to Dashboard
                        </Button>
                    </Link>
                    <Link href="/auth/signin">
                        <Button size="lg" variant="outline" className="gap-2 text-lg h-12 px-8">
                            Get Started
                            <ArrowRight className="h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>

            {/* Features Grid */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 max-w-6xl mx-auto mb-16">
                <div className="group rounded-lg border p-6 hover:shadow-lg transition-all">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Dashboard
                    </h2>
                    <p className="text-muted-foreground">
                        Comprehensive overview of your business metrics.
                    </p>
                </div>

                <div className="group rounded-lg border p-6 hover:shadow-lg transition-all">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Authentication
                    </h2>
                    <p className="text-muted-foreground">
                        Secure access via Google and Facebook.
                    </p>
                </div>

                <div className="group rounded-lg border p-6 hover:shadow-lg transition-all">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Integrations
                    </h2>
                    <p className="text-muted-foreground">
                        Connect specifically with Facebook & WhatsApp.
                    </p>
                </div>
            </section>
        </main>
    );
}

