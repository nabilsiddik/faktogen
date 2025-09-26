import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"
import { SessionProvider } from "next-auth/react";

const montserrat = Montserrat({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-roboto",
})

export const metadata: Metadata = {
  title: "Home - XMart",
  description: "Home page of x-mart ecommerce site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Toaster richColors position="top-right" />
        <SessionProvider>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
