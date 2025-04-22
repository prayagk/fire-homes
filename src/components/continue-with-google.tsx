"use client";

import React from "react";
import { Button } from "./ui/button";
import { useAuth } from "@/context/auth";

export default function ContinueWithGoogleButton() {
  const auth = useAuth();
  const clickHandler = () => auth?.loginWithGoogle();

  return (
    <Button className="w-full" onClick={clickHandler}>
      Continue with google
    </Button>
  );
}
