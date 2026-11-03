import { useRef } from "react";
import { formatPrice, PRODUCTS } from "../data";
import { ArrowLeft, ArrowRight } from "./icons";

export default function Products({ onAdd }: { onAdd: (productId: string) => void }) {
  const track = useRef<HTMLDivElement | null>(null);
  const scroll = (dir: number) =>
    track.current?.scrollBy({ left: dir * 300, behavior: "smooth" });

  return (
    <section id="products" className="py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div
          ref={track}
          className="no-scrollbar flex snap-x gap-3 overflow-x-auto pb-3 sm:gap-4"
        >
          {PRODUCTS.map((p) => (
            <article
              key={p.name}
              className="relative flex h-[218px] w-[142px] shrink-0 snap-start flex-col rounded border border-leaf/15 bg-[#f7f9f4] p-2 transition hover:border-leaf/40 sm:h-[238px] sm:w-[178px] sm:p-2.5 md:h-[258px] md:w-[210px]"
            >
              <img
                src={p.img}
                alt={p.name}
                className="h-[132px] w-full rounded-sm object-contain sm:h-[148px] md:h-[160px]"
              />
              <h3 className="mt-2 line-clamp-2 min-h-[25px] text-[10px] font-semibold leading-tight text-ink sm:text-[11px]">
                {p.name}
              </h3>
              <div className="mt-auto flex items-center justify-between gap-1 pt-2">
                <button
                  onClick={() => onAdd(p.id)}
                  aria-label={`Añadir ${p.name} al carrito`}
                  className="flex items-center rounded-sm bg-leaf px-1.5 py-1 text-[9px] font-semibold text-white transition hover:bg-forest"
                >
                  Añadir
                </button>
                <span className="rounded-sm bg-forest px-1.5 py-1 text-[9px] font-semibold text-white">
                  {formatPrice(p.price)}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-3 flex justify-end gap-1.5">
          <button
            onClick={() => scroll(-1)}
            aria-label="Productos anteriores"
            className="flex h-8 w-8 items-center justify-center rounded-sm bg-mist text-ink transition hover:bg-leaf hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={() => scroll(1)}
            aria-label="Productos siguientes"
            className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink text-white transition hover:bg-forest"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
