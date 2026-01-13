import type { Metadata } from "next";
import { Orbitron, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  weight: ["400", "700", "900"],
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-share-tech-mono",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "RGB CHROMATIC CALIBRATOR",
  description: "Vintage broadcast monitor-style RGB color picker with Supabase storage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${orbitron.variable} ${shareTechMono.variable} font-mono antialiased`}
        style={{ fontFamily: 'var(--font-share-tech-mono), monospace' }}
      >
        {children}
      </body>
    </html>
  );
}
