import { IMG } from "../data";
import Reveal from "./Reveal";
import { CheckIcon } from "./icons";

const stats = [
  { value: "30k+", label: "Clientes satisfechos" },
  { value: "80k+", label: "Productos vendidos" },
  { value: "90k+", label: "Clientes felices" },
];

const avatars = [IMG.avatar1, IMG.avatar2, IMG.avatar3];

export default function Triumph() {
  return (
    <section className="py-14 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <p className="inline-flex items-center gap-2 rounded-full bg-mist px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-leaf-dark">
            <CheckIcon className="h-3 w-3" />
            Más de 30.000 amantes del matcha
          </p>
          <h2 className="mt-5 text-[1.7rem] font-medium leading-snug tracking-tight text-ink md:text-4xl">
            Cada sorbo de matcha es{" "}
            <span className="text-leaf">un triunfo.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-md text-[12px] leading-relaxed text-ink/50">
            Preparamos innumerables tazas de matcha para disfrutar de la calma con intención
            y compartir historias, sorbo a sorbo.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-8 rounded-[2rem] border border-mist bg-white/80 px-8 py-8 shadow-[0_25px_50px_-25px_rgba(79,138,40,0.35)]">
            {stats.map((s) => (
              <div key={s.label} className="text-left">
                <p className="bg-gradient-to-br from-matcha to-forest bg-clip-text text-[1.9rem] font-bold leading-none text-transparent">
                  {s.value}
                </p>
                <p className="mt-1.5 text-[11px] font-medium text-ink/50">{s.label}</p>
              </div>
            ))}
            <img
              src={IMG.bowlsStrip}
              alt="Cuencos de matcha con batidor de bambú"
              className="h-20 w-64 rounded-xl object-cover shadow-sm ring-1 ring-mist"
            />
            <div className="flex items-center">
              <div className="flex -space-x-3">
                {avatars.map((a, i) => (
                  <img
                    key={i}
                    src={a}
                    alt="Cliente satisfecho"
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
              <span className="-ml-2 flex h-10 w-10 items-center justify-center rounded-full bg-leaf text-[10px] font-bold text-white ring-2 ring-white">
                30k
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
