import { ThemeProvider } from "@/components/providers/theme-provider";
import { Inter } from "@/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
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
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="main">
              <div className="gradient"></div>
            </div>

            <main className="app">{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
