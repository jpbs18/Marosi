export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 text-center">
      <div className="max-w-6xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-lg">Marosi</h4>
          <p>Construção, Renovação e Fix & Flip Imobiliário</p>
          <p>📍 Mozelos, Portugal</p>
          <p>Est. 2025</p>
        </div>
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-lg">Serviços</h4>
          <ul className="space-y-1">
            <li>Remodelações</li>
            <li>Fix & Flip Imobiliário</li>
            <li>Obras Chave-na-Mão</li>
            <li>Consultoria Personalizada</li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="text-white font-semibold text-lg">Contactos</h4>
          <p>📧 geral@marosi.pt</p>
          <p>🌐 www.marosi.pt</p>
        </div>
      </div>
      <div className="bg-neutral-800 text-center py-4 text-sm">
        © {new Date().getFullYear()} Marosi. Todos os direitos reservados.
      </div>
    </footer>
  );
}
