import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SalesPage() {
    return (
        <div className="flex-1 space-y-4 p-8 pt-6">
            <div className="flex items-center justify-between space-y-2">
                <h2 className="text-3xl font-bold tracking-tight">Sales Pipeline</h2>
                <div className="flex items-center space-x-2">
                    <Button>
                        <Plus className="mr-2 h-4 w-4" /> New Sale
                    </Button>
                </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
                <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold text-lg text-yellow-600 dark:text-yellow-500">Pending</h3>
                    <Card className="bg-yellow-50/50 dark:bg-yellow-900/10 border-yellow-200 dark:border-yellow-800">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Order #1024</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Client: Sarah Smith</p>
                            <p className="text-sm font-bold mt-2">$140.00</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold text-lg text-green-600 dark:text-green-500">Won</h3>
                    <Card className="bg-green-50/50 dark:bg-green-900/10 border-green-200 dark:border-green-800">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Order #1020</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Client: Mohamed Amine</p>
                            <p className="text-sm font-bold mt-2">$500.00</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex flex-col space-y-4">
                    <h3 className="font-semibold text-lg text-red-600 dark:text-red-500">Lost</h3>
                    <Card className="bg-red-50/50 dark:bg-red-900/10 border-red-200 dark:border-red-800">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-base">Order #1021</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Client: Unknown</p>
                            <p className="text-sm font-bold mt-2">$50.00</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
