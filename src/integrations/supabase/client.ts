// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://neocydzmpvhxhfgvvvjj.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5lb2N5ZHptcHZoeGhmZ3Z2dmpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkxNzQ0MTUsImV4cCI6MjA1NDc1MDQxNX0.q2NGAL_gxFHNze9oR0KIgY3KTkgxGvGG2eFV3nDZeII";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);