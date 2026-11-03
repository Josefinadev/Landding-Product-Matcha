import Reveal from "./Reveal";

export default function Benefits() {
  return (
    <section className="h-[420px] overflow-hidden bg-leaf-dark text-white sm:h-[460px] md:h-[520px]">
      <div className="relative mx-auto h-full max-w-6xl overflow-hidden px-6">
        <Reveal className="relative z-20 pt-6 text-center md:pt-8">
          <h2 className="whitespace-nowrap font-display text-[clamp(3.6rem,20vw,12rem)] leading-[0.82] text-white">
            MATCHA
          </h2>
        </Reveal>

        <img
          src="/machaverde.png"
          alt="Vaso de matcha helado con crema y polvo de matcha"
          className="pointer-events-none absolute -bottom-[55px] left-[-8%] z-10 h-[370px] w-auto max-w-none object-contain sm:h-[410px] md:left-[3%] md:h-[540px]"
        />

        <Reveal delay={100}>
          <p className="absolute right-5 top-[55%] z-20 max-w-[40%] text-center text-[11px] leading-relaxed text-white/80 sm:right-8 sm:max-w-[36%] sm:text-[12px] md:right-[5%] md:max-w-[300px] md:text-[13px]">
            Una taza de matcha para impulsar tu creatividad y acompañar tu día.
          </p>
        </Reveal>
      </div>

    </section>
  );
}
