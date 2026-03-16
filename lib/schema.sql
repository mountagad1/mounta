-- Mounta Supabase Schema
-- Run this in Supabase SQL editor

-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Waitlist table
create table if not exists waitlist (
  id uuid default uuid_generate_v4() primary key,
  email text unique not null,
  created_at timestamptz default now()
);

-- Goals table
create table if not exists goals (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  description text,
  status text default 'active' check (status in ('active', 'paused', 'completed', 'archived')),
  plan jsonb,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Goal steps (milestones breakdown)
create table if not exists goal_steps (
  id uuid default uuid_generate_v4() primary key,
  goal_id uuid references goals(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  title text not null,
  description text,
  week_number int,
  completed boolean default false,
  completed_at timestamptz,
  created_at timestamptz default now()
);

-- Daily actions
create table if not exists daily_actions (
  id uuid default uuid_generate_v4() primary key,
  goal_id uuid references goals(id) on delete cascade,
  user_id uuid references auth.users(id) on delete cascade,
  action text not null,
  day_number int not null,
  duration_minutes int default 30,
  action_type text default 'create',
  completed boolean default false,
  completed_at timestamptz,
  created_at timestamptz default now()
);

-- RLS Policies
alter table waitlist enable row level security;
alter table goals enable row level security;
alter table goal_steps enable row level security;
alter table daily_actions enable row level security;

-- Waitlist: anyone can insert
create policy "Anyone can join waitlist" on waitlist
  for insert with check (true);

-- Goals: users own their goals
create policy "Users own their goals" on goals
  for all using (auth.uid() = user_id);

create policy "Users own their steps" on goal_steps
  for all using (auth.uid() = user_id);

create policy "Users own their actions" on daily_actions
  for all using (auth.uid() = user_id);

-- Indexes
create index if not exists goals_user_id_idx on goals(user_id);
create index if not exists daily_actions_goal_id_idx on daily_actions(goal_id);
create index if not exists daily_actions_user_id_idx on daily_actions(user_id);
