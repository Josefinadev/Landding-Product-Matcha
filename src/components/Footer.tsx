import { ArrowUp, LeafIcon } from "./icons";

const explore = [
  { label: "Inicio", href: "#home" },
  { label: "Productos", href: "#products" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];
const licensing = ["Términos y condiciones", "Política de privacidad"];
const socials = ["Instagram", "TikTok", "Pinterest"];

export default function Footer() {
  return (
    <footer id="contact" className="bg-pine text-white">
      <div className="h-1 bg-gradient-to-r from-leaf-dark via-matcha to-lime" />
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-matcha to-leaf-dark text-white shadow-lg shadow-matcha/30">
              <LeafIcon className="h-5 w-5" />
            </span>
            <p className="font-display text-5xl md:text-6xl">MATCHA</p>
          </div>
          <p className="mt-5 max-w-xs text-[12px] leading-relaxed text-white/55">
            El matcha es un polvo finamente molido que aporta energía y concentración a tu
            día. Su color vibrante y sabor terroso acompañan muy bien los postres, aunque
            también puedes disfrutarlo solo.
          </p>
          <div className="mt-6 flex gap-2.5">
            {socials.map((s) => (
              <a
                key={s}
                href="#contact"
                className="rounded-full border border-white/15 px-4 py-1.5 text-[11px] font-medium text-white/60 transition hover:border-matcha hover:bg-matcha/15 hover:text-lime"
              >
                {s}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[12px] font-semibold text-white/90">© 2023 Todos los derechos reservados</p>
          <ul className="mt-4 space-y-2.5">
            {explore.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[12px] text-white/55 transition hover:text-lime"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold text-white/90">Información legal</p>
          <ul className="mt-4 space-y-2.5">
            {licensing.map((l) => (
              <li key={l}>
                <a href="#" className="text-[12px] text-white/55 transition hover:text-lime">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[12px] font-semibold tracking-widest text-white/90">
            HABLEMOS
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a
                href="mailto:Support@Gmail.com"
                className="text-[12px] text-white/55 transition hover:text-lime"
              >
                Support@Gmail.com
              </a>
            </li>
            <li>
              <a href="#" className="text-[12px] text-white/55 transition hover:text-lime">
                @GmailTweet
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5">
          <p className="text-[11px] text-white/45">©2025 Matcha. Todos los derechos reservados</p>
          <a
            href="#home"
            className="group flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60 transition hover:text-lime"
          >
            Volver arriba
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-matcha text-white transition group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
