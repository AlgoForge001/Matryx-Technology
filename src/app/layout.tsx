import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matryx Technology — Digital Solutions & Growth Partner",
  description:
    "Matryx Technology builds powerful websites, promotes brands across India, and helps businesses grow with smart digital strategies. Get a free consultation today.",
  openGraph: {
    title: "Matryx Technology — All Your Business Software & Digital Growth Solutions",
    description:
      "We build powerful websites, promote brands across India, and help businesses grow with smart digital strategies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
