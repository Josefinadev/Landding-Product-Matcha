import { IMG } from "../data";
import { ArrowRight } from "./icons";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent">
      <div className="pointer-events-none absolute left-1/2 top-[45%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-matcha/12 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-8 md:pb-20 md:pt-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex rounded-full border border-ink/10 bg-white/80 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-ink/70 shadow-sm backdrop-blur">
            La magia del matcha
          </p>

          <h1 className="mt-5 font-display text-[clamp(4rem,16vw,12rem)] leading-[0.8] tracking-[-0.04em] text-ink">
            MATCHA
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-ink/65">
            Desde la hoja hasta tu ritual diario, acompañamos cada taza con precisión,
            calma y energía limpia.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#products"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3 text-[12px] font-semibold tracking-wide text-white shadow-lg transition hover:bg-leaf"
            >
              Comprar ahora
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
            <button
              type="button"
              className="rounded-full border border-ink/10 bg-white/80 px-6 py-3 text-[12px] font-semibold text-ink shadow-sm transition hover:border-matcha/30 hover:text-leaf-dark"
            >
              Ver más
            </button>
          </div>
        </div>

        <div className="relative z-10 mt-12 mx-auto max-w-5xl rounded-[32px] border border-ink/10 bg-white/90 p-3 shadow-[0_35px_80px_rgba(31,46,26,0.14)] backdrop-blur-sm">
          <div className="rounded-[26px] bg-[#f4f2ee] p-3 sm:p-5">
            <div className="flex items-center justify-between rounded-[20px] border border-ink/5 bg-white/80 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-[#f96c6c]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#f5c760]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#66c58a]" />
              </div>
              <div className="rounded-full border border-ink/10 bg-ink/3 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-ink/55">
                matcha
              </div>
            </div>

            <div className="mt-4 grid gap-4 lg:grid-cols-[1.5fr_0.9fr]">
              <div className="rounded-[24px] bg-white p-4 shadow-[0_12px_28px_rgba(18,28,18,0.05)] sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-ink/40">
                      Política y seguridad
                    </p>
                    <h2 className="mt-2 text-xl font-semibold text-ink">Tu compra protegida</h2>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-semibold text-emerald-700">
                    Verificado
                  </span>
                </div>

                <div className="mt-5 space-y-3">
                  {[
                    ["Autenticación", "2 pasos activos"],
                    ["Pago seguro", "PCI y cifrado"],
                    ["Envío rastreado", "Seguimiento en tiempo real"],
                  ].map(([title, desc]) => (
                    <div key={title} className="flex items-start justify-between rounded-2xl border border-ink/5 bg-[#f9f8f4] px-3 py-3">
                      <div>
                        <p className="text-sm font-medium text-ink">{title}</p>
                        <p className="mt-1 text-[11px] text-ink/55">{desc}</p>
                      </div>
                      <span className="mt-1 h-3 w-3 rounded-full bg-matcha shadow-[0_0_0_4px_rgba(116,160,77,0.12)]" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[24px] bg-[#f2efe9] p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                      Revisión
                    </p>
                    <p className="mt-1 text-sm font-medium text-ink">Pantalla real</p>
                  </div>
                  <div className="rounded-full bg-white px-2 py-1 text-[10px] font-semibold text-leaf-dark">
                    Secure
                  </div>
                </div>

                <div className="mt-5 rounded-[22px] bg-white p-4 shadow-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-ink/45">
                      Matcha
                    </span>
                    <span className="text-[10px] text-ink/45">9:41</span>
                  </div>

                  <div className="mt-4 rounded-[18px] bg-[#f6f3ee] p-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={IMG.product1}
                        alt="Matcha ceremonial"
                        className="h-14 w-14 rounded-xl object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[12px] font-semibold text-ink">Matcha ceremonial</p>
                        <p className="mt-1 text-[11px] text-ink/55">Entrega segura · 48h</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between rounded-full border border-ink/10 bg-ink/[0.02] px-3 py-2">
                    <span className="text-[11px] text-ink/60">Protección de pago</span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-[10px] font-bold text-emerald-700">
                      ✓
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
