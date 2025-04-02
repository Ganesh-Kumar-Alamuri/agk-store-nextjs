"use client";

import { ThemeProvider } from "./themeprovider";
import { Toaster } from "@/components/ui/toaster";
function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Toaster />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </>
  );
}
export default Providers;
