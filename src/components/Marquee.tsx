import { Sparkle } from "./icons";

const items = [
  "Matcha 100% orgánico",
  "Grado ceremonial",
  "Molido en piedra en Uji",
  "Sin azúcar añadida",
  "Energía sin nerviosismo",
  "137 veces más antioxidantes",
];

export default function Marquee() {
  return (
    <div className="relative z-10 overflow-hidden border-y border-forest/40 bg-gradient-to-r from-leaf-dark via-leaf to-leaf-dark py-3.5">
      <div className="animate-marquee flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center" aria-hidden={copy === 1}>
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-3 px-7 text-[11px] font-semibold uppercase tracking-[0.28em] text-white"
              >
                <Sparkle className="h-3.5 w-3.5 text-lime" />
                {item}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
