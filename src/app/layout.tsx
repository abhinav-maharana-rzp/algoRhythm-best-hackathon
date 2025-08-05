import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AlgoRhythm – BEST Internal AI Hackathon",
  description: "Solving Today's Challenges for a Smarter Tomorrow. Join BEST's internal AI hackathon and compete for amazing prizes.",
  keywords: ["AI", "hackathon", "BEST", "innovation", "technology", "competition"],
  authors: [{ name: "BEST" }],
  robots: "index, follow",
  openGraph: {
    title: "AlgoRhythm – BEST Internal AI Hackathon",
    description: "Solving Today's Challenges for a Smarter Tomorrow",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AlgoRhythm – BEST Internal AI Hackathon",
    description: "Solving Today's Challenges for a Smarter Tomorrow",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#4f46e5" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
