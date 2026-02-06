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
    <main className="flex-1 text-stone-900">
      <section>
        <div className="max-w-6xl mx-auto px-6 py-24 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            Construção e Remodelação com Rigor e Qualidade
          </h1>

          <p className="text-lg md:text-xl text-stone-600 leading-relaxed max-w-3xl mx-auto">
            Transformamos imóveis com soluções modernas e funcionais.
            Especialistas em remodelações completas, reabilitação de interiores
            e projetos Fix & Flip para valorização do seu património.
          </p>
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="max-w-4xl mx-auto px-6 py-20 text-center space-y-4">
          <p className="text-lg font-medium text-stone-700">
            Remodelações e renovações residenciais e comerciais
          </p>
          <p className="text-lg font-medium text-stone-700">
            Projetos Fix & Flip para maximizar o valor do seu imóvel
          </p>
          <p className="text-lg font-medium text-stone-700">
            Atendimento dedicado e profissionalismo em cada detalhe
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
          <h2 className="text-3xl font-bold text-center">Serviços</h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
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
              "Soluções Personalizadas",
            ].map((service) => (
              <li
                key={service}
                className="bg-white border border-stone-200 rounded-2xl p-8 text-center font-medium text-stone-800 shadow-sm hover:shadow-lg transition duration-300"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-stone-100">
        <div className="max-w-6xl mx-auto px-6 py-24 space-y-12">
          <h2 className="text-3xl font-bold text-center">Projetos Recentes</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {galleryImages.map((url, idx) => (
              <div
                key={idx}
                className="relative w-full h-64 rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition duration-300"
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
        </div>
      </section>
    </main>
  );
}
