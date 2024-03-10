import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { Inter as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

import { Suspense } from "react";

export const metadata = {
  title: "Utopia Clone",
  description: "Generate awesome portraits in minutes using AI",
};

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-tl from-fuchsia-100 to-slate-200",
          fontSans.variable
        )}>
          <section>
            <Suspense fallback={<div className="mt-20 flex w-full px-4 lg:px-20 py-4 items-center border-b text-center gap-8 justify-between h-[69px]" />}>
              <Navbar />
            </Suspense>
          </section>
          <main className="flex flex-1 flex-col items-center py-1 pt-14">
            {children}
          </main>
          <Toaster />
      </body>
    </html>
  );
}
