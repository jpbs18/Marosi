import type { Metadata } from "next";
import "./globals.css";

const CLOUDINARY_BASE = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

export const metadata: Metadata = {
  title: "Marosi | Construção, Renovação e Fix&Flip Imobiliário",
  description: "Construção, Renovação e Fix&Flip Imobiliário",
  icons: {
    icon: "/Marosi_logo.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <head></head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
