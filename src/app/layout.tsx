import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { SideNavbar } from "@/components/side-navigation-bar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Gabriel Kaunang",
  description: "Researcher at the University of Chicago",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.variable} antialiased`}>
        <div className="flex flex-col lg:flex-row min-h-screen">
          <div className=" lg:sticky lg:top-0 lg:h-screen">
            <SideNavbar />
          </div>
          <main className="p-5 pt-20 lg:pr-10 lg:pt-20 lg:ml-0 lg:max-w-4xl lg:w-full">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
