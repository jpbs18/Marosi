import Image from "next/image";

const galleryImages = [
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857313/ylhbiqdymsxkw0igbf3z.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/k2v1ycxwzqcluu2etucx.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/sqspwkm33xb3sggp3wbg.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/moiygr0ncbxrhywldkad.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/w6z2a29bklsfxiibt3rn.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/vvejbqpney2xld3pwvfb.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/kkkb83a3gibanebecr5d.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857311/lm5f6tfkugwsq9winm2j.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/fyl7bikyqqxwspppn1vt.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/qscvnwxmczz7zh24ngsr.webp",
  "https://res.cloudinary.com/dmhbuwega/image/upload/v1769857312/lqqmga1wqbna3ihrelbt.webp",
];

export default function MainContent() {
  return (
    <main className="flex-1 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        {/* Intro Section */}
        <section className="space-y-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900">
            🔧 Construção, Renovação e Fix & Flip Imobiliário
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed text-lg md:text-xl">
            Na Marosi, transformamos projetos em realidade. De remodelações a
            soluções inovadoras para valorizar o seu imóvel, oferecemos serviços
            modernos, sustentáveis e totalmente personalizados.
          </p>
        </section>

        {/* Highlights */}
        <section className="max-w-3xl mx-auto space-y-3 text-center">
          <p className="text-green-800 font-semibold text-lg">
            ✅ Remodelações e renovações de espaços residenciais e comerciais
          </p>
          <p className="text-green-800 font-semibold text-lg">
            ✅ Fix & Flip imobiliário para maximizar o valor do seu património
          </p>
          <p className="text-green-800 font-semibold text-lg">
            ✅ Atendimento dedicado e profissionalismo em cada detalhe
          </p>
        </section>

        {/* Services Section */}
        <section>
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center text-green-900">
            Serviços
          </h3>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              "Remodelações Completas",
              "Cozinhas e Casas de Banho",
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
              "Soluções personalizadas",
            ].map((service) => (
              <li
                key={service}
                className="bg-white border border-green-200 rounded-xl p-6 text-center font-medium text-gray-800 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              >
                {service}
              </li>
            ))}
          </ul>
        </section>

        {/* Gallery Section */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 text-center mb-12">
            Projetos Recentes
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {galleryImages.map((url, idx) => (
              <div
                key={idx}
                className="relative w-full h-64 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
              >
                <Image
                  src={url}
                  alt={`Projeto ${idx + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
