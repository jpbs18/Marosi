import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marosi",
  description: "Construção, Renovação e Fix&Flip Imobiliário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
