export default function MainContent() {
  return (
    <main className="flex-1 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-12 space-y-14">
        {/* Intro */}
        <section className="space-y-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-green-700">
            🔧 Construção, Renovação e Fix & Flip Imobiliário
          </h2>
          <p className="max-w-3xl mx-auto">
            Na Marosi, transformamos projetos em realidade. De remodelações a
            soluções inovadoras para valorizar o seu imóvel, oferecemos serviços
            modernos, sustentáveis e totalmente personalizados.
          </p>
        </section>

        {/* Highlights */}
        <section className="max-w-3xl mx-auto space-y-3">
          <p>
            ✅ Remodelações e renovações de espaços residenciais e comerciais
          </p>
          <p>
            ✅ Fix & Flip imobiliário para maximizar o valor do seu património
          </p>
          <p>✅ Atendimento dedicado e profissionalismo em cada detalhe</p>
        </section>

        {/* Services Section */}
        <section>
          <h3 className="text-xl md:text-2xl font-semibold mb-6 text-center text-green-700">
            Serviços
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Remodelações Completas (Chave-na-Mão)",
              "Remodelação de Cozinhas e Casas de Banho",
              "Demolições",
              "Pedreiro e Alvenarias",
              "Pladur",
              "Canalização e Esgotos",
              "Redes Elétricas",
              "Pisos Autonivelantes e Vinílicos",
              "Cerâmicos e Revestimentos",
              "Barramentos e Emassamentos",
              "Acabamentos e Rodapés",
              "Pinturas Interior e Exterior",
              "Impermeabilizações",
              "Reabilitação de Interiores",
              "Soluções por Medida",
            ].map((service) => (
              <li
                key={service}
                className="border rounded-lg p-4 hover:shadow transition bg-white"
              >
                {service}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
