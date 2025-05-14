create table if not exists code_files (
  id uuid primary key default gen_random_uuid(),
  file_name text not null,
  content text not null,
  updated_at timestamp with time zone default now()
);
