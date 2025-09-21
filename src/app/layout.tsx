import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "3RD FADE | Créations vidéos",
  description: "Découvrez mes créations vidéo professionnelles. Portfolio d'un vidéographe passionné par l'art cinématographique et la narration visuelle.",
  keywords: "vidéographe, portfolio, cinéma, vidéo, création, montage, réalisation, edit, capcut",
  authors: [{ name: "3RD FADE" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "3RD FADE | Créations Cinématographiques",
    description: "Découvrez mes créations vidéo professionnelles. Portfolio d'un vidéographe passionné par l'art cinématographique et la narration visuelle.",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "3DFade - Portfolio Vidéographe",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-black text-white`}
      >
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
