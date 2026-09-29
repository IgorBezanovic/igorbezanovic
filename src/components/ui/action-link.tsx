"use client";
import NextLink from "next/link";
import { Button } from "@mui/material";
export function ActionLink({
  href,
  children,
  variant = "contained",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "contained" | "outlined" | "text";
}) {
  return (
    <Button component={NextLink} href={href} variant={variant}>
      {children}
    </Button>
  );
}
