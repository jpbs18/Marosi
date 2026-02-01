import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 text-center">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-lg">Localização</h4>
          <p>Construção, Renovação e Fix & Flip Imobiliário</p>
          <p>📍 Mozelos, Portugal</p>
          <p>Est. 2025</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-lg">Contactos</h4>
          <p>
            📧{" "}
            <a href="mailto:geral@marosi.pt" className="hover:text-white">
              geral@marosi.pt
            </a>
          </p>
          <p className="flex items-center justify-center gap-2">
            <a
              href="https://www.instagram.com/marosi.pt?igsh=NzZobTh5bm4zaXMz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              <FaInstagram className="text-pink-500" />
              Marosi.pt
            </a>
          </p>
        </div>
      </div>
      <div className="bg-neutral-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Marosi. Todos os direitos reservados.
      </div>
    </footer>
  );
}
