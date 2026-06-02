import { supabase } from "@/lib/supabase";

export async function getGroceries() {
  const { data, error } = await supabase
    .from("groceries")
    .select("id, name, category")
    .order("category")
    .order("name");

  if (error) throw error;

  return data ?? [];
}