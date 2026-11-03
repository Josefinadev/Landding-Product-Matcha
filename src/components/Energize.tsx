import type { ReactNode } from "react";
import { IMG } from "../data";
import Reveal from "./Reveal";

function ArcLabel({
  children,
  align = "left",
}: {
  children: ReactNode;
  align?: "left" | "right";
}) {
  const right = align === "right";
  return (
    <div className={right ? "flex flex-col items-end" : ""}>
      <svg
        viewBox="0 0 100 24"
        className={`h-6 w-28 text-leaf/70 ${right ? "scale-x-[-1]" : ""}`}
        fill="none"
      >
        <path
          d="M3 21C22 5 62 3 97 15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      <p className="mt-1 text-sm font-semibold text-ink">{children}</p>
    </div>
  );
}

function ArcImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative mx-auto h-72 w-72 md:h-80 md:w-80">
      <div className="absolute inset-6 rounded-full bg-matcha/25 blur-2xl" />
      <svg
        viewBox="0 0 100 100"
        className="absolute -inset-3 h-[calc(100%+1.5rem)] w-[calc(100%+1.5rem)] text-leaf/60"
      >
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.9"
          pathLength="100"
          strokeDasharray="74 26"
          strokeLinecap="round"
          transform="rotate(-50 50 50)"
        />
      </svg>
      <img
        src={src}
        alt={alt}
        className="relative h-full w-full rounded-full object-cover shadow-lg ring-4 ring-mist"
      />
    </div>
  );
}

function ExploreButton() {
  return (
    <a
      href="#products"
      className="mt-6 inline-block rounded-full bg-ink px-7 py-3 text-[12px] font-semibold text-white shadow-lg transition hover:bg-leaf hover:shadow-leaf/40"
    >
      Explorar ahora
    </a>
  );
}

export default function Energize() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-matcha/10 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="text-center text-[1.7rem] font-medium tracking-tight text-ink md:text-4xl">
            Llena tu día de energía con <span className="text-leaf">matcha vibrante</span>
          </h2>
        </Reveal>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">
          <Reveal>
            <ArcLabel>Matcha vibrante</ArcLabel>
            <div className="mt-8">
              <ArcImage src="/Vaso1.png" alt="Vaso de matcha espumoso" />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="max-w-md">
              <p className="text-[12px] leading-relaxed text-ink/60">
                El matcha es té verde finamente molido que aporta a tu bebida un sabor intenso
                y energía natural. Contiene antioxidantes y L-teanina, y puede favorecer un{" "}
                <span className="font-semibold text-leaf-dark">
                  enfoque sereno y constante
                </span>{" "}
                — sin nerviosismo ni bajones de energía.
              </p>
              <p className="mt-4 text-[12px] leading-relaxed text-ink/60">
                El matcha también aporta antioxidantes. Puedes batirlo en un latte cremoso o
                mezclarlo con hielo para darle un toque revitalizante a cualquier bebida.
              </p>
              <ExploreButton />
            </div>
          </Reveal>
        </div>

        <div className="mt-24 grid items-center gap-14 lg:grid-cols-2">
          <Reveal delay={120}>
            <div className="max-w-md">
              <h3 className="text-lg font-semibold text-ink">
                <span className="text-leaf">Matcha</span> vibrante
              </h3>
              <p className="mt-4 text-[12px] leading-relaxed text-ink/60">
                El matcha es un té verde en polvo de color intenso que aporta energía y
                concentración a tu día. Su sabor terroso combina muy bien con leche cremosa o
                un toque cítrico.
              </p>
              <p className="mt-4 text-[12px] leading-relaxed text-ink/60">
                Ya sea en un latte espumoso o espolvoreado sobre postres, el matcha añade un
                toque refrescante y revitalizante, ideal para empezar la mañana o continuar
                la tarde.
              </p>
              <ExploreButton />
            </div>
          </Reveal>
          <Reveal>
            <ArcLabel align="right">Matcha vibrante</ArcLabel>
            <div className="mt-8">
              <ArcImage src={IMG.energizeSplash} alt="Matcha helado salpicando en un vaso" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
