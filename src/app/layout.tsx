import type { Metadata } from "next";
import { Raleway, Space_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { SectionProvider } from "./context/SectionContext";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Raul Escandon",
  description:
    "Developer, researcher, and builder. I create intelligent web applications and open source tools that make a real difference.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${spaceMono.variable} antialiased`}>
        <SectionProvider>
          <NavBar />
          {children}
          <Footer />
          <Toaster />
        </SectionProvider>
      </body>
    </html>
  );
}
