import { IMG } from "../data";
import { CheckIcon, Seal, Sparkle } from "./icons";

const chips = ["Sin bajón de energía", "Enfoque sereno", "Solo hoja pura"];

export default function Banner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-leaf via-leaf-dark to-pine text-white">
      <div className="bg-dots-light pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute -left-24 -top-28 h-80 w-80 rounded-full border-[36px] border-white/10" />
      <div className="pointer-events-none absolute -bottom-32 -right-16 h-96 w-96 rounded-full border-[44px] border-white/10" />
      <div className="pointer-events-none absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-lime/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 py-14 md:py-16 lg:grid-cols-[230px_1fr_210px]">
        <img
          src={IMG.heroDrink}
          alt="Matcha latte helado"
          className="mx-auto h-64 w-full object-contain mix-blend-multiply drop-shadow-[0_25px_25px_rgba(0,0,0,0.35)] lg:h-80"
        />

        <div className="text-center lg:text-left">
          <div className="relative inline-block">
            <Sparkle className="absolute -left-9 -top-1 h-7 w-7 text-lime" />
            <h2 className="font-display text-[clamp(3.4rem,9vw,7.5rem)] leading-[0.9] tracking-[-0.01em]">
              MATCHA
            </h2>
          </div>
          <p className="mx-auto mt-5 max-w-sm text-[12px] leading-relaxed text-white/85 lg:mx-0">
            Preparamos cada taza con naturaleza, pasión y propósito: elegimos cada
            ingrediente para impulsar tu creatividad y acompañar tus rituales diarios, sin
            bajones de energía.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {chips.map((c) => (
              <span
                key={c}
                className="flex items-center gap-1.5 rounded-full border border-white/30 bg-white/10 px-3.5 py-1.5 text-[11px] font-medium backdrop-blur"
              >
                <CheckIcon className="h-3 w-3 text-lime" />
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-5 lg:flex-col">
          <Seal className="animate-spin-slow h-24 w-24 text-white" />
          <img
            src={IMG.bannerCup}
            alt="Vaso de matcha helado con pajita"
            className="h-24 w-24 rounded-full border-4 border-lime/50 object-cover shadow-xl lg:h-28 lg:w-28"
          />
        </div>
      </div>
    </section>
  );
}
