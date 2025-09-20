import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Vidéographe | Créations Cinématographiques",
  description: "Découvrez mes créations vidéo professionnelles. Portfolio d'un vidéographe passionné par l'art cinématographique et la narration visuelle.",
  keywords: "vidéographe, portfolio, cinéma, vidéo, création, montage, réalisation",
  authors: [{ name: "Vidéographe Portfolio" }],
  openGraph: {
    title: "Portfolio Vidéographe | Créations Cinématographiques",
    description: "Découvrez mes créations vidéo professionnelles. Portfolio d'un vidéographe passionné par l'art cinématographique et la narration visuelle.",
    type: "website",
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
      </body>
    </html>
  );
}
