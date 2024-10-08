import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import SmallSidebar from "@/components/SmallSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Image Gallery 🖼️",
    description: "Image Gallery | Nextjs | Cloudinary | Shadcn",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
              <Navbar/>
              <SmallSidebar/>
                <div className="flex ">
                <Sidebar className="hidden md:flex md:w-1/5 " />
                <div className="w-full">{children}</div>
                </div>
            </body>
        </html>
    );
}
