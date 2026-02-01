import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marosi | Construção, Renovação e Fix&Flip Imobiliário",
  description: "Construção, Renovação e Fix&Flip Imobiliário",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const favicon32 = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/w_32,h_32,c_fill,f_auto/grwotcskzda02qxhnzeu.webp`;
  const favicon16 = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/w_16,h_16,c_fill,f_auto/grwotcskzda02qxhnzeu.webp`;
  const appleIcon = `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/w_180,h_180,c_fill,f_auto/grwotcskzda02qxhnzeu.webp`;

  return (
    <html lang="pt">
      <head>
        <link rel="icon" type="image/png" href={favicon16} />
        <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
        <link rel="apple-touch-icon" href={appleIcon} />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
