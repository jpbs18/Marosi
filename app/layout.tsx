import type { Metadata } from "next";
import "./globals.css";

const CLOUDINARY_BASE = process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL;

export const metadata: Metadata = {
  title: "Marosi | Construção, Renovação e Fix&Flip Imobiliário",
  description: "Construção, Renovação e Fix&Flip Imobiliário",
  icons: {
    icon: [
      `${CLOUDINARY_BASE}/w_16,h_16,c_fill,f_png/grwotcskzda02qxhnzeu.png`,
      `${CLOUDINARY_BASE}/w_32,h_32,c_fill,f_png/grwotcskzda02qxhnzeu.png`,
    ],
    apple: `${CLOUDINARY_BASE}/w_180,h_180,c_fill,f_png/grwotcskzda02qxhnzeu.png`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const favicon16 = `${CLOUDINARY_BASE}/w_16,h_16,c_fill,f_png/grwotcskzda02qxhnzeu_v2.png`;
  const favicon32 = `${CLOUDINARY_BASE}/w_32,h_32,c_fill,f_png/grwotcskzda02qxhnzeu_v2.png`;
  const appleIcon = `${CLOUDINARY_BASE}/w_180,h_180,c_fill,f_png/grwotcskzda02qxhnzeu_v2.png`;
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
