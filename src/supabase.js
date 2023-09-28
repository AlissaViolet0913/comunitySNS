import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey = process.env.RAECT_APP_SUPABASE_ANON_KEY;

// Project URL, API KEYの設定
// export const supabase = createClient(
//   "https://tfydnlbfauusrsxxhaps.supabase.co",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRmeWRubGJmYXV1c3JzeHhoYXBzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ4MTEzODIsImV4cCI6MjAwMDM4NzM4Mn0.5zF-ou0o0sJ4Nr-WVmfuEHcehs1Bwmwn0y7CNSASzQY",
// );

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
    detectSessionInUrl: false,
  },
});
