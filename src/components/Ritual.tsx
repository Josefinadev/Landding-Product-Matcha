import { IMG } from "../data";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Tamiza y mide",
    text: "Tamiza 2 g de matcha ceremonial con un colador fino para deshacer los grumos y liberar su intenso aroma verde.",
    img: IMG.product1,
    alt: "Matcha en polvo sobre una cuchara",
  },
  {
    n: "02",
    title: "Bate hasta espumar",
    text: "Añade 70 ml de agua a 80 °C y bate enérgicamente en forma de 'M' con un chasen de bambú hasta obtener una espuma sedosa.",
    img: IMG.whiskArtisan,
    alt: "Matcha batiéndose con un chasen de bambú",
  },
  {
    n: "03",
    title: "Sirve y disfruta",
    text: "Viértelo sobre hielo y tu leche favorita, contempla el remolino verde esmeralda y disfruta de una energía serena y enfocada.",
    img: "/machahielo.webp",
    alt: "Matcha latte helado listo para beber",
  },
];

export default function Ritual() {
  return (
    <section id="ritual" className="bg-gradient-to-b from-transparent via-pale to-transparent py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="text-center">
          <p className="inline-block rounded-full bg-mist px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-leaf-dark">
            El ritual
          </p>
          <h2 className="mt-4 text-[1.7rem] font-medium tracking-tight text-ink md:text-4xl">
            Prepáralo como un <span className="text-leaf">maestro del té</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[12px] leading-relaxed text-ink/50">
            Tres pasos sencillos, noventa segundos: tu momento diario de calma verde.
          </p>
        </Reveal>

        <div className="relative mt-14 grid gap-10 md:grid-cols-3 md:gap-6 lg:gap-8">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-24 hidden border-t-2 border-dashed border-matcha/40 md:block" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 130}>
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-mist bg-white shadow-[0_15px_35px_-20px_rgba(79,138,40,0.35)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-22px_rgba(79,138,40,0.5)]">
                <div className="relative">
                  <img
                    src={s.img}
                    alt={s.alt}
                    className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute -bottom-5 left-6 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-matcha to-leaf-dark font-display text-base text-white shadow-lg shadow-leaf/40 ring-4 ring-white">
                    {s.n}
                  </span>
                </div>
                <div className="px-6 pb-7 pt-9">
                  <h3 className="text-[15px] font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[12px] leading-relaxed text-ink/55">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
