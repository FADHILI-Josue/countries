import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "@/Providers";
import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Providers>
      <body className={cn(
            'min-h-screen font-sans antialiased w-full overflow-x-hidden grainy bg-slate-100 dark:bg-gray-800',
            inter.className
          )}>
        <NavBar />
        {children}
        </body>
      </Providers>
    </html>
  );
}
