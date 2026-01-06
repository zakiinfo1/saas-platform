"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { UploadCloud } from "lucide-react";

export default function AddProductPage() {
    const [file, setFile] = useState<File | null>(null);

    const handleUpload = async () => {
        // Stub for upload logic
        console.log("Uploading file:", file);
    };

    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">New Product</h2>
            </div>

            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Product Details</CardTitle>
                        <CardDescription>Enter manual details or use AI extraction.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="grid gap-2">
                            <label htmlFor="name" className="text-sm font-medium">Product Name</label>
                            <Input id="name" placeholder="e.g. Wireless Headset" />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="price" className="text-sm font-medium">Price</label>
                            <Input id="price" type="number" placeholder="29.99" />
                        </div>
                        <div className="grid gap-2">
                            <label htmlFor="desc" className="text-sm font-medium">Description</label>
                            <textarea className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="desc" placeholder="Product description..." />
                        </div>
                        <Button className="w-full">Save Product</Button>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>AI Extraction</CardTitle>
                        <CardDescription>Upload a CSV, PDF, or text file to auto-fill details.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div
                            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-10 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-900 transition"
                            onClick={() => document.getElementById('file-upload')?.click()}
                        >
                            <UploadCloud className="h-10 w-10 text-gray-500 mb-4" />
                            <p className="text-sm text-gray-500">Click to upload or drag and drop</p>
                            <input
                                id="file-upload"
                                type="file"
                                className="hidden"
                                accept=".csv,.pdf,.txt"
                                onChange={(e) => setFile(e.target.files?.[0] || null)}
                            />
                        </div>
                        {file && (
                            <div className="text-sm text-green-600 font-medium">
                                Selected: {file.name}
                            </div>
                        )}
                        <Button variant="secondary" className="w-full" onClick={handleUpload} disabled={!file}>
                            Extract Info with AI
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
