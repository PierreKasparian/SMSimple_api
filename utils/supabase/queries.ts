"use server";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function signOut() {
  const supabase = await createClient();

  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect("/error");
  }
  redirect("/");
}

export async function getCredits(user_id: string): Promise<number> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("API_KEY")
    .select("credits")
    .eq("user_id", user_id)
    .single();
  if (error) {
    console.error("Error getting credits:", error);
    redirect("/error");
  }
  return data.credits;
}

export async function getUsedCredits(user_id: string): Promise<number> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("API_KEY")
    .select("used_credits")
    .eq("user_id", user_id)
    .single();
  if (error) {
    console.error("Error getting used credits:", error);
    redirect("/error");
  }
  return data.used_credits;
}


