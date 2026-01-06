import { createClient } from '@/config/supabase';

export async function generateEmbedding(text: string) {
    // Stub: Request embedding from OpenAI (text-embedding-3-small)
    // const response = await openai.embeddings.create({ ... })

    // Return mock 1536-dim vector for now
    return new Array(1536).fill(0).map(() => Math.random());
}

export async function storeProductEmbedding(productId: string, description: string) {
    const embedding = await generateEmbedding(description);
    const supabase = createClient();

    const { error } = await supabase
        .from('products')
        .update({ embedding })
        .eq('id', productId);

    if (error) throw error;
}

export async function findSimilarProducts(query: string) {
    const embedding = await generateEmbedding(query);
    const supabase = createClient();

    // Requires the match_products function in Postgres (setup in schema.sql usually or via migration)
    const { data, error } = await supabase.rpc('match_products', {
        query_embedding: embedding,
        match_threshold: 0.7,
        match_count: 5
    });

    if (error) throw error;
    return data;
}
