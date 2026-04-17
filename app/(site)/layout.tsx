// css
import "./globals.css";
// next
import type { Metadata } from "next";
import { Boldonse, Inter, Days_One } from "next/font/google";
// sanity
import { SanityLive } from "@/sanity/lib/live";
import { VisualEditing } from "next-sanity/visual-editing";
import { draftMode } from "next/headers";
// components
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

// font
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const boldonse = Boldonse({
  variable: "--font-boldonse",
  subsets: ["latin"],
  weight: ["400",],
  adjustFontFallback: false,
});

const daysOne = Days_One({
  variable: "--font-daysOne",
  subsets: ["latin"],
  weight: ["400",],
});

// metadata
export const metadata: Metadata = {
  title: {
    default: "Nexpixelo",
    template: "%s | Nexpixelo",
  },
  description: "Nexpixelo — a modern Next.js application.",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // draft mode check
  const isDraftMode = (await draftMode()).isEnabled;

  return (
    <html
      lang="en"
      className={`${inter.variable} ${boldonse.variable} ${daysOne.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh flex flex-col bg-background text-foreground"
        style={{
          background: "linear-gradient(180deg, #E4E3FF 0%, #FFE6F9 43.27%, #FFFFFF 100%)",
        }}>
        <Navbar />
        {children}
        <Footer />

        {/* sanity live & visual editing */}
        <SanityLive />
        {isDraftMode && <VisualEditing />}
      </body>
    </html>
  );
}
