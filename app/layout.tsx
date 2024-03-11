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
import Script from "next/script";

export const metadata = {
  title: "Utopia Clone",
  description: "Generate awesome portraits in minutes using AI",
};

export default function RootLayout({ children }: any) {
  return (
<html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SCVCC4H9TG"
        />
        <Script id="google-analytics">
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', ${'${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}'});
          `}
        </Script>
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased bg-gradient-to-tl from-fuchsia-100 to-slate-200",
          fontSans.variable
        )}>
          <section>
            <Suspense fallback={<div className="" />}>
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
