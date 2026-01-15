import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, LayoutDashboard, LogIn } from "lucide-react";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-b from-background to-muted">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex absolute top-10 px-10">
                <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                    SaaS Platform&nbsp;
                    <code className="font-mono font-bold">v0.1.0</code>
                </p>
                <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
                    <Link href="/auth/signin">
                        <Button variant="ghost" size="sm" className="gap-2">
                            <LogIn className="h-4 w-4" />
                            Sign In
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="relative flex place-items-center flex-col gap-6 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                        Your Complete SaaS Solution
                    </h1>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                        Manage clients, products, and sales with AI-powered insights.
                        Multi-language support and seamless integrations.
                    </p>
                </div>

                <div className="flex gap-4 items-center mt-8">
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
            </div>

            <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left mt-24 gap-8">
                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Dashboard{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Comprehensive overview of your business metrics.
                    </p>
                </div>

                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Authentication{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Secure access via Google and Facebook.
                    </p>
                </div>

                <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Integrations{" "}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Connect specifically with Facebook & WhatsApp.
                    </p>
                </div>
            </div>
        </main>
    );
}

