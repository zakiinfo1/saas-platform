-- Enable pgvector extension for AI embeddings
create extension if not exists vector;

-- PRODUCTS TABLE
create table if not exists products (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  name text not null,
  description text,
  price decimal(10, 2),
  embedding vector(1536), -- for AI search
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- CLIENTS TABLE
create table if not exists clients (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  name text not null,
  phone text,
  source text,
  notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- SALES TABLE
create table if not exists sales (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  client_id uuid references clients(id),
  product_id uuid references products(id),
  status text check (status in ('Pending', 'Won', 'Lost')),
  amount decimal(10, 2),
  ai_notes text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- INTEGRATIONS TABLE
create table if not exists integrations (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  provider text not null, -- 'facebook', 'whatsapp', 'instagram'
  access_token text,
  page_id text,
  token_expires_at timestamp with time zone,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- REPORTS TABLE
create table if not exists reports (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) not null,
  type text, -- 'daily_insight', etc
  data jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- RLS POLICIES (Simple application-level multitenancy, but good to have rudimentary RLS)
alter table products enable row level security;
create policy "Users can view own products" on products for select using (auth.uid() = user_id);
create policy "Users can insert own products" on products for insert with check (auth.uid() = user_id);
create policy "Users can update own products" on products for update using (auth.uid() = user_id);
create policy "Users can delete own products" on products for delete using (auth.uid() = user_id);

alter table clients enable row level security;
create policy "Users can view own clients" on clients for select using (auth.uid() = user_id);
create policy "Users can insert own clients" on clients for insert with check (auth.uid() = user_id);
create policy "Users can update own clients" on clients for update using (auth.uid() = user_id);
create policy "Users can delete own clients" on clients for delete using (auth.uid() = user_id);

alter table sales enable row level security;
create policy "Users can view own sales" on sales for select using (auth.uid() = user_id);
create policy "Users can insert own sales" on sales for insert with check (auth.uid() = user_id);
create policy "Users can update own sales" on sales for update using (auth.uid() = user_id);
create policy "Users can delete own sales" on sales for delete using (auth.uid() = user_id);

alter table integrations enable row level security;
create policy "Users can view own integrations" on integrations for select using (auth.uid() = user_id);
create policy "Users can insert own integrations" on integrations for insert with check (auth.uid() = user_id);
create policy "Users can update own integrations" on integrations for update using (auth.uid() = user_id);
create policy "Users can delete own integrations" on integrations for delete using (auth.uid() = user_id);

alter table reports enable row level security;
create policy "Users can view own reports" on reports for select using (auth.uid() = user_id);
create policy "Users can insert own reports" on reports for insert with check (auth.uid() = user_id);
