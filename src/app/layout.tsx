import type { Metadata } from "next";
import { Cormorant_Garamond, IBM_Plex_Mono, Source_Serif_4 } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import "./globals.css";

const serifDisplay = Cormorant_Garamond({
  variable: "--font-serif-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serifBody = Source_Serif_4({
  variable: "--font-serif-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoUi = IBM_Plex_Mono({
  variable: "--font-mono-ui",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: {
    default: "Digitizing the Archive",
    template: "%s · Digitizing the Archive",
  },
  description:
    "An interactive archive pairing archival documents with literary texts—interpretation, access, and human-centered digital reading.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifDisplay.variable} ${serifBody.variable} ${monoUi.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col text-[var(--ink)]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
