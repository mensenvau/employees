import type { Metadata } from "next";
import { ThemeProvider } from "@/registry/theme-provider";
import { Toaster } from "@/registry/ui/toaster"
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Admin panel - # Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}

//suppressHydrationWarning={true}
