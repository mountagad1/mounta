"use client";

import { ClerkProvider } from "@clerk/nextjs";

type ClerkClientProviderProps = {
  children: React.ReactNode;
};

export default function ClerkClientProvider({
  children,
}: ClerkClientProviderProps) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
