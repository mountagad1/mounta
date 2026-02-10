import { createClient } from "@supabase/supabase-js";

/**
 * Server-side Supabase client
 * Uses SERVICE ROLE key (never exposed to browser)
 */
export const supabaseServer = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!,
  {
    auth: {
      persistSession: false,
    },
  }
);
