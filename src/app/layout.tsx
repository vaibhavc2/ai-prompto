import { Navbar } from "@/components/custom";
import { AuthProvider, ThemeProvider } from "@/components/providers";
import { Inter } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Session } from "next-auth";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "AI-Prompto",
  description: "Discover & Share AI Prompts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            Inter.variable
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="main dark:bg-black dark:opacity-[12%]">
              <div className="gradient block dark:hidden"></div>
              <div className="dark:dark_gradient hidden dark:block"></div>
            </div>

            <AuthProvider session={{} as Session}>
              <main className="app">
                <Navbar />
                {children}
              </main>
            </AuthProvider>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
