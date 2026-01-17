
"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, Copy, Check } from "lucide-react";

export default function SettingsPage() {
    const [accessToken, setAccessToken] = useState<string>("");
    const [showToken, setShowToken] = useState(false);
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        const getSession = async () => {
            const supabase = createClient();
            const { data: { session } } = await supabase.auth.getSession();

            // Note: provider_token is only available immediately after sign in on the client side
            // if configured in Supabase. Otherwise, this might display the Supabase access token.
            if (session?.provider_token) {
                setAccessToken(session.provider_token);
            } else if (session?.access_token) {
                setAccessToken("Supabase Token: " + session.access_token.substring(0, 20) + "... (Provider token not persisted)");
            } else {
                setAccessToken("No active session found.");
            }
        };
        getSession();
    }, []);

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
