import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full h-[15vh] bg-gray-300 flex items-center px-4">
      <div className="flex w-full flex-col sm:flex-row items-center sm:items-start justify-start max-w-6xl mx-auto gap-2 sm:gap-0">
        {/* Logo */}
        <div className="w-20 h-20 sm:w-28 sm:h-28 relative flex-shrink-0">
          <Image
            src="https://res.cloudinary.com/dmhbuwega/image/upload/w_200,h_200,c_fill,f_auto/grwotcskzda02qxhnzeu.webp"
            alt="Marosi logo"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}
