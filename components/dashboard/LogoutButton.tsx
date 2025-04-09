"use client";
import React from "react";
import { Button } from "../ui/button";
import { signOut } from "@/utils/supabase/queries";
import Link from "next/link";
const LogoutButton = () => {
  return (
    <Button variant="outline" asChild onClick={() => signOut()}>
      <Link href="/">Logout</Link>
    </Button>
  );
};

export default LogoutButton;
