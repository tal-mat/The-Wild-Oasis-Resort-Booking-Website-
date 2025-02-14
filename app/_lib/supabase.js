import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client with URL and API key from environment variables
export const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY,
);
