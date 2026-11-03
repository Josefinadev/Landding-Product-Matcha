import Reveal from "./Reveal";

export default function Brewing() {
  return (
    <section id="about" className="bg-pale py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-center text-[1.7rem] font-medium leading-snug tracking-tight text-ink md:text-4xl">
            Brillo en cada taza, energía para{" "}
            <span className="text-leaf">quienes siempre aspiran.</span>
          </h2>
        </Reveal>

        <div className="mt-12 space-y-12 md:mt-16 md:space-y-20">
          <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.5fr] md:gap-12">
            <Reveal>
              <img
                src="/Imagenmacha.jpg"
                alt="Taza de matcha con arte latte, hojas y polvo de té"
                className="mx-auto h-52 w-full max-w-md object-contain mix-blend-multiply md:h-60"
              />
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-br-[56px] border-b-2 border-r-2 border-leaf px-6 py-7 md:px-10 md:py-9">
                <p className="text-[12px] leading-relaxed text-ink/70 md:text-[13px]">
                  En Green Montana creemos que el matcha debe ser sencillo, intenso y
                  revitalizante. Nuestro matcha de grado ceremonial se muele en piedra en
                  pequeños lotes para ofrecer un sabor suave que acompaña tu concentración y
                  tu día.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid items-center gap-6 md:grid-cols-[0.9fr_1.5fr] md:gap-12">
            <Reveal delay={100}>
              <img
                src="/conjuntomacha.jpg"
                alt="Cuatro bebidas heladas de matcha con distintos sabores"
                className="mx-auto h-48 w-full max-w-xl object-contain mix-blend-multiply md:h-56"
              />
            </Reveal>
            <Reveal delay={200}>
              <div className="rounded-tl-[56px] border-l-2 border-t-2 border-leaf px-6 py-7 md:px-10 md:py-9">
                <p className="text-[12px] leading-relaxed text-ink/70 md:text-[13px]">
                  Lo obtenemos de un único origen para conservar su color, aroma y nutrientes
                  naturales: sin aditivos ni atajos, solo matcha puro.
                </p>
                <p className="mt-4 text-[12px] leading-relaxed text-ink/70 md:text-[13px]">
                  Creemos tanto en la pureza como en los sabores intensos; por eso, cada sorbo
                  reconforta y revitaliza.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
