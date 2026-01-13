"use client";

import { useSession } from "next-auth/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Eye, EyeOff, Copy, Check } from "lucide-react";

export default function SettingsPage() {
    const { data: session } = useSession();
    const [showToken, setShowToken] = useState(false);
    const [copied, setCopied] = useState(false);

    // @ts-ignore
    const accessToken = session?.accessToken || "No token found. Sign in with Facebook/Google again.";

    const handleCopy = () => {
        navigator.clipboard.writeText(accessToken);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <h2 className="text-3xl font-bold tracking-tight">Settings</h2>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Integration Tokens</CardTitle>
                        <CardDescription>
                            Access tokens for your connected services (Facebook, WhatsApp). Use these in n8n.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-1">
                            <Label>Facebook Access Token</Label>
                            <div className="flex space-x-2">
                                <Input
                                    type={showToken ? "text" : "password"}
                                    value={accessToken}
                                    readOnly
                                    className="font-mono text-sm bg-muted"
                                />
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={() => setShowToken(!showToken)}
                                >
                                    {showToken ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </Button>
                                <Button
                                    variant="outline"
                                    size="icon"
                                    onClick={handleCopy}
                                >
                                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                            <p className="text-xs text-muted-foreground mt-2">
                                <strong>Security Warning:</strong> This token grants access to your Facebook account actions. Keep it secret.
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
