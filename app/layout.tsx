import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Marosi | Construção, Renovação e Fix & Flip Imobiliário",
  description:
    "Empresa especializada em construção, remodelação e projetos Fix & Flip em Portugal.",
  icons: {
    icon: "/Marosi_logo.webp",
    shortcut: "/Marosi_logo.webp",
    apple: "/Marosi_logo.webp",
  },
  openGraph: {
    title: "Marosi",
    description:
      "Construção, Remodelação e Fix & Flip Imobiliário em Portugal.",
    url: "https://marosi.vercel.app",
    siteName: "Marosi",
    locale: "pt_PT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
