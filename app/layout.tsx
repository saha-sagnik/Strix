import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./(auth)/_components/theme-provider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Strix",
  description: "LiveStreaming Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
    <html lang="en">
      <link rel="shortcut icon" href="/twitch.svg" type="image/x-icon" />
      <body className={inter.className}>
      <ThemeProvider attribute="class" forcedTheme="dark" storageKey ="strix-theme">
        {children}
        </ThemeProvider></body>
    </html>
    </ClerkProvider>
  );
}
