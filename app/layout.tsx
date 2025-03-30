import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AppKitContextProvider from "@/contexts/appkit";
import { headers } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Globie",
  description: "Explore the world's most famous monuments",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookies = (await headers()).get('cookie')

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased dark flex min-h-screen flex-col`}
      >
        <AppKitContextProvider cookies={cookies}>
          {children}
        </AppKitContextProvider>
      </body>
    </html>
  );
}
