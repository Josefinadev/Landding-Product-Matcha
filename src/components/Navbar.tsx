import { CartIcon, LeafIcon } from "./icons";

const links = [
  { label: "Inicio", href: "#home" },
  { label: "Productos", href: "#products" },
  { label: "Nosotros", href: "#about" },
  { label: "Contacto", href: "#contact" },
];

export default function Navbar({
  cartCount,
  onCartClick,
}: {
  cartCount: number;
  onCartClick: () => void;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-cream/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-matcha to-leaf-dark text-white shadow-md shadow-matcha/40">
            <LeafIcon className="h-4.5 w-4.5" />
          </span>
          <span className="font-script text-[2rem] leading-none text-ink">
            Matcha<span className="text-matcha">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              className={`relative text-[13px] tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:rounded-full after:bg-matcha after:transition-all ${
                i === 0
                  ? "font-semibold text-ink after:w-full"
                  : "text-ink/55 after:w-0 hover:text-leaf-dark hover:after:w-full"
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onCartClick}
            aria-label={`Abrir carrito, ${cartCount} productos`}
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink transition hover:border-matcha hover:text-leaf-dark"
          >
            <CartIcon className="h-[18px] w-[18px]" />
            <span className="absolute -right-1 -top-1 flex h-4.5 w-4.5 items-center justify-center rounded-full bg-matcha text-[9px] font-bold text-white">
              {cartCount}
            </span>
          </button>
          <a
            href="#products"
            className="hidden rounded-full bg-leaf px-5 py-2.5 text-[12px] font-semibold tracking-wide text-white shadow-md shadow-leaf/30 transition hover:bg-forest sm:block"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </header>
  );
}
