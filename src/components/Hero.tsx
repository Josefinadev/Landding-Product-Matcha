import { IMG } from "../data";
import {
  ArrowRight,
  BoltIcon,
  LeafIcon,
  Seal,
  ShieldIcon,
  Sparkle,
  StarIcon,
} from "./icons";

const perks = [
  { icon: LeafIcon, label: "80% menos acidez" },
  { icon: BoltIcon, label: "2 veces más cafeína" },
  { icon: ShieldIcon, label: "0% de azúcar añadida" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-dots pointer-events-none absolute inset-0 opacity-60 [mask-image:radial-gradient(70%_60%_at_50%_35%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-[52%] h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-matcha/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 top-24 h-64 w-64 rounded-full bg-lime/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-64 h-72 w-72 rounded-full bg-matcha/20 blur-3xl" />

      <LeafIcon
        className="animate-floaty pointer-events-none absolute left-[10%] top-[30%] hidden h-8 w-8 text-matcha/50 lg:block"
      />
      <LeafIcon
        className="animate-floaty pointer-events-none absolute right-[12%] top-[24%] hidden h-6 w-6 text-leaf/40 lg:block [--r:40deg] [animation-delay:1.2s]"
      />
      <LeafIcon
        className="animate-floaty pointer-events-none absolute bottom-[16%] left-[6%] hidden h-5 w-5 text-leaf/30 lg:block [--r:-30deg] [animation-delay:2s]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-10 md:pb-20 md:pt-14">
        <div className="flex justify-center">
          <p className="flex items-center gap-2.5 rounded-full border border-matcha/30 bg-white/80 py-1.5 pl-2 pr-4 text-[11px] font-medium uppercase tracking-[0.22em] text-leaf-dark shadow-sm backdrop-blur">
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-matcha text-white">
              <LeafIcon className="h-3 w-3" />
            </span>
            La magia del matcha: solo la hoja, sin aditivos
          </p>
        </div>

        <div className="relative mt-5">
          <Sparkle className="absolute left-[3%] top-[-8px] z-20 h-7 w-7 text-matcha md:h-10 md:w-10" />
          <h1 className="relative z-20 text-center font-display text-[clamp(4.2rem,16.5vw,13rem)] leading-[0.85] tracking-[-0.01em] text-ink">
            MATCHA
          </h1>
          <svg
            viewBox="0 0 300 20"
            className="relative z-20 mx-auto -mt-1 w-52 text-matcha md:w-80"
            fill="none"
            aria-hidden
          >
            <path
              d="M4 14C80 4 220 4 296 10"
              stroke="currentColor"
              strokeWidth="5"
              strokeLinecap="round"
            />
          </svg>
          <Seal className="animate-spin-slow absolute right-[1%] top-[0%] z-20 h-16 w-16 text-leaf md:right-[3%] md:h-24 md:w-24" />

          <div className="relative z-10 mx-auto w-fit">
            <img
              src="/imagenhero.png"
              alt="Matcha latte helado en un vaso alto con hielo"
              className="relative -mt-[6vw] w-[270px] mix-blend-multiply drop-shadow-[0_35px_35px_rgba(79,138,40,0.35)] [mask-image:linear-gradient(to_bottom,black_0%,black_86%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_0%,black_86%,transparent_100%)] md:w-[370px]"
            />
            <div className="absolute -left-44 bottom-20 hidden items-center gap-3 rounded-2xl border border-mist bg-white/90 p-3 pr-5 shadow-xl shadow-leaf/10 backdrop-blur xl:flex">
              <img
                src={IMG.product1}
                alt="Matcha ceremonial en polvo"
                className="h-12 w-12 rounded-xl object-cover"
              />
              <div>
                <p className="text-[11px] font-semibold leading-tight text-ink">
                  Molido en piedra
                </p>
                <p className="text-[10px] leading-tight text-ink/50">
                  Grado ceremonial · Uji, Japón
                </p>
              </div>
            </div>
            <div className="absolute -right-8 top-[30%] hidden rotate-6 rounded-full bg-leaf px-4 py-2 text-[11px] font-semibold text-white shadow-lg shadow-leaf/40 sm:block">
              Desde S/ 39.00
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center text-center lg:absolute lg:left-6 lg:top-[57%] lg:mt-0 lg:block lg:w-56 lg:text-left">
          <p className="text-[12px] leading-relaxed text-ink/55">
            Conocido por su sabor intenso y sus posibles beneficios, el matcha contiene
            antioxidantes y puede contribuir al metabolismo.
          </p>
          <a
            href="#products"
            className="group mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[12px] font-semibold tracking-wide text-white shadow-lg transition hover:bg-leaf hover:shadow-leaf/40"
          >
            Comprar ahora
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
          <div className="mt-5 flex items-center justify-center gap-2 lg:justify-start">
            <span className="flex text-matcha">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} className="h-3.5 w-3.5" />
              ))}
            </span>
            <span className="text-[11px] font-medium text-ink/60">
              4.9 · más de 30 mil tazas servidas
            </span>
          </div>
        </div>

        <ul className="mt-10 flex flex-col items-center gap-3 lg:absolute lg:right-6 lg:top-[55%] lg:mt-0 lg:items-start">
          {perks.map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-3 rounded-full border border-matcha/20 bg-white/70 py-1.5 pl-1.5 pr-4 shadow-sm backdrop-blur"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-matcha to-leaf text-white">
                <Icon className="h-4 w-4" />
              </span>
              <span className="text-[12px] font-medium text-ink/75">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
