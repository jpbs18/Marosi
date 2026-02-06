import Image from "next/image";

export default function Header() {
  return (
    <header className="w-full bg-stone-100 border-b border-stone-200">
      <div className="max-w-6xl mx-auto flex items-center justify-center py-2 px-4">
        <div className="flex items-center gap-4">
          <div className="relative w-30 h-30">
            <Image
              src="/logo.webp"
              alt="Marosi logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="text-2xl md:text-3xl font-semibold tracking-tight text-stone-900">
            MAROSI
          </span>
        </div>
      </div>
    </header>
  );
}
