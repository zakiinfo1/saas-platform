import { NextRequest, NextResponse } from 'next/server';
import { extractProductInfo } from '@/lib/ai/extract-products';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;

        if (!file) {
            return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
        }

        // In a real app, we would upload to Supabase Storage here first
        // const buffer = Buffer.from(await file.arrayBuffer());

        // For now, we simulate extraction directly from the text content (if text/csv)
        // or just return a mock success for binary files until we have PDF parsing

        const extractionResult = await extractProductInfo(file);

        return NextResponse.json({
            success: true,
            data: extractionResult,
            message: 'File processed successfully'
        });

    } catch (error) {
        console.error('Upload error:', error);
        return NextResponse.json({ error: 'Upload failed' }, { status: 500 });
    }
}
