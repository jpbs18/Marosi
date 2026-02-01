import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Marosi | Construção, Renovação e Fix&Flip Imobiliário",
  description: "Construção, Renovação e Fix&Flip Imobiliário",
  icons: {
    icon: [
      `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/w_16,h_16,c_fill,f_png/grwotcskzda02qxhnzeu.png`,
      `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/w_32,h_32,c_fill,f_png/grwotcskzda02qxhnzeu.png`,
    ],
    apple: `${process.env.NEXT_PUBLIC_CLOUDINARY_BASE_URL}/w_180,h_180,c_fill,f_png/grwotcskzda02qxhnzeu.png`,
  },
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
