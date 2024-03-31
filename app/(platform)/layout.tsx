import React from "react";
import { Toaster } from "sonner";

import ModalProvider from "@/components/providers/modal-provider";
import { ClerkProvider } from "@clerk/nextjs";
import QueryProvider from "@/components/providers/query-provider";

interface PlatformLayoutProps {
  children: React.ReactNode;
}

export default function PlatformLayout({ children }: PlatformLayoutProps) {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
}
