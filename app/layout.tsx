import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next onlineshop",
  description: "online shop ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header/>
          {children}
          <footer  className="footer footer-center bg-base-300 text-base-content p-4">
            <p>copyright 2024 -All right reserved by Next Onlineshop</p>
          </footer>
        </div>
        </body>
    </html>
  );
}
