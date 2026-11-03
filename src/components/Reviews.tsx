import { useState } from "react";
import { IMG } from "../data";
import Reveal from "./Reveal";
import { ArrowLeft, ArrowRight, Sparkle, StarIcon } from "./icons";

const reviews = [
  {
    text: "No puedo explicar cuánto me gusta esta bebida. ¡También he enganchado a todos mis compañeros de trabajo! El ponche tropical es mi sabor favorito hasta ahora.",
    name: "M.Anderson",
    avatar: IMG.reviewAvatar,
  },
  {
    text: "El grado ceremonial es increíble: suave, intenso y nada amargo. Ahora mi ritual matutino empieza y termina con una taza de este matcha.",
    name: "S.Kim",
    avatar: IMG.avatar1,
  },
  {
    text: "Por fin un matcha que sabe realmente fresco. El envío fue rápido y el empaque mantiene cada bolsa perfectamente cerrada y aromática.",
    name: "J.Rivera",
    avatar: IMG.avatar3,
  },
];

export default function Reviews() {
  const [index, setIndex] = useState(0);
  const r = reviews[index];
  const prev = () => setIndex((index - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((index + 1) % reviews.length);

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-matcha/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-leaf">
            Opiniones
          </p>
          <h2 className="mt-3 font-display text-5xl leading-[0.95] text-ink md:text-7xl">
            CLIENTES
            <br />
            <span className="text-leaf">OPINAN</span>
          </h2>
          <p className="mt-5 max-w-xs text-[12px] leading-relaxed text-ink/50">
            Esto es lo que cuenta nuestra comunidad: opiniones de quienes disfrutan nuestros
            productos.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <div className="flex gap-2">
              <button
                onClick={prev}
                aria-label="Opinión anterior"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-mist bg-white text-ink transition hover:border-matcha hover:bg-mist"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <button
                onClick={next}
                aria-label="Opinión siguiente"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-white shadow-md shadow-leaf/40 transition hover:bg-forest"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-1.5">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  aria-label={`Ir a la opinión ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-7 bg-leaf" : "w-2 bg-matcha/30 hover:bg-matcha/60"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative flex justify-center lg:justify-end">
            <div
              key={index}
              className="fade-up relative flex h-[340px] w-[340px] flex-col items-center justify-center rounded-full bg-gradient-to-br from-matcha via-leaf to-leaf-dark px-10 text-center text-white shadow-[0_35px_60px_-25px_rgba(58,107,28,0.65)] ring-8 ring-mist md:h-[400px] md:w-[400px]"
            >
              <Sparkle className="absolute left-10 top-12 h-5 w-5 text-lime/70" />
              <img
                src={r.avatar}
                alt={r.name}
                className="absolute -top-3 right-8 h-14 w-14 rounded-full object-cover ring-4 ring-lime"
              />
              <span className="flex gap-1 text-lime">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </span>
              <span className="mt-4 font-display text-7xl leading-[0.4] text-white/90">
                &ldquo;
              </span>
              <p className="mt-5 text-[13px] leading-relaxed text-white/95">{r.text}</p>
              <p className="mt-4 font-script text-2xl text-white">{r.name}</p>
            </div>
            <img
              src={IMG.reviewDrink}
              alt="Frappé de matcha con crema batida"
              className="absolute -bottom-10 -left-2 hidden w-28 mix-blend-multiply md:block"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
