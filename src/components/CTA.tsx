import { useState, type FormEvent } from "react";
import { IMG } from "../data";
import Reveal from "./Reveal";
import { ArrowRight, CheckIcon, LeafIcon } from "./icons";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setDone(true);
  };

  return (
    <section className="px-6 pb-20 md:pb-24">
      <Reveal>
        <div className="relative mx-auto grid max-w-6xl overflow-hidden rounded-[2.5rem] bg-pine text-white shadow-[0_40px_70px_-30px_rgba(14,35,20,0.7)] lg:grid-cols-2">
          <div className="bg-dots-light pointer-events-none absolute inset-0" />
          <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-matcha/25 blur-3xl" />

          <div className="relative p-10 md:p-14">
            <p className="inline-flex items-center gap-2 rounded-full border border-lime/40 px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.25em] text-lime">
              <LeafIcon className="h-3 w-3" />
              Únete al club del matcha
            </p>
            <h2 className="mt-6 font-display text-4xl leading-[1.02] md:text-5xl">
              Obtén un 15% de descuento en tu primer pedido
            </h2>
            <p className="mt-4 max-w-sm text-[12.5px] leading-relaxed text-white/60">
              Únete a más de 30.000 amantes del matcha. Recibe recetas, rituales y acceso
              anticipado a cosechas limitadas directamente en tu correo, una vez por semana.
            </p>

            {done ? (
              <p className="mt-8 flex items-center gap-3 rounded-2xl border border-lime/40 bg-white/[0.07] px-5 py-4 text-[13px] font-medium text-lime">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-matcha text-white">
                  <CheckIcon className="h-4 w-4" />
                </span>
                ¡Ya estás dentro! Enviaremos tu código de descuento del 15% a {email}.
              </p>
            ) : (
              <form
                onSubmit={submit}
                className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Tu correo electrónico"
                  className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-[13px] text-white placeholder:text-white/40 outline-none backdrop-blur transition focus:border-lime/60 focus:bg-white/15"
                />
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-full bg-matcha px-6 py-3.5 text-[12px] font-bold tracking-wide text-white shadow-lg shadow-matcha/30 transition hover:bg-lime hover:text-pine"
                >
                  Obtener 15% de descuento
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
            <p className="mt-4 text-[10.5px] text-white/40">
              Nunca enviaremos spam. Puedes darte de baja cuando quieras.
            </p>
          </div>

          <div className="relative min-h-[260px]">
            <img
              src={IMG.plantation}
              alt="Exuberante plantación de té verde en Uji"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pine via-pine/25 to-transparent" />
            <div className="absolute bottom-6 right-6 rounded-2xl bg-white/90 px-4 py-3 text-pine shadow-xl backdrop-blur">
              <p className="font-display text-xl leading-none">Uji, Japón</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-pine/60">
                Cosecha de origen único
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
