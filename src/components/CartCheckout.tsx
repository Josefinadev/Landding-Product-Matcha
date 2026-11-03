import { useState, type FormEvent } from "react";
import { formatPrice, type Product } from "../data";
import { ArrowLeft, CartIcon } from "./icons";

type CartItem = { product: Product; quantity: number };

type Props = {
  items: CartItem[];
  onClose: () => void;
  onQuantityChange: (productId: string, quantity: number) => void;
};

const fieldClass =
  "mt-1 w-full rounded-sm border border-mist bg-white px-3 py-2.5 text-[13px] text-ink outline-none focus:border-matcha";

export default function CartCheckout({ items, onClose, onQuantityChange }: Props) {
  const [step, setStep] = useState<"cart" | "payment">("cart");
  const [demoMessage, setDemoMessage] = useState("");
  const subtotal = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const close = () => {
    setStep("cart");
    setDemoMessage("");
    onClose();
  };

  const submitDemo = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setDemoMessage("Formulario validado en modo demo. No se procesó ningún pago.");
  };

  return (
    <main className="min-h-screen bg-cream px-4 py-6 sm:px-6 sm:py-10">
      <section
        aria-labelledby="cart-title"
        className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-3xl flex-col border border-mist bg-white shadow-sm sm:min-h-[calc(100vh-5rem)]"
      >
        <header className="flex items-center justify-between border-b border-mist px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            {step === "payment" && (
              <button
                type="button"
                onClick={() => {
                  setStep("cart");
                  setDemoMessage("");
                }}
                aria-label="Volver al carrito"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-mist bg-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
            )}
            <div>
              <h2 id="cart-title" className="text-lg font-semibold text-ink">
                {step === "cart" ? "Tu carrito" : "Entrega y pago"}
              </h2>
              <p className="text-[11px] text-ink/55">
                {step === "cart"
                  ? `${items.reduce((sum, item) => sum + item.quantity, 0)} artículos`
                  : "Modo demostración"}
              </p>
            </div>
          </div>
          <button type="button" onClick={close} className="text-[12px] font-medium text-ink/60 hover:text-ink">
            Volver a la tienda
          </button>
        </header>

        {step === "cart" ? (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-8">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <CartIcon className="h-9 w-9 text-leaf" />
                  <p className="mt-4 font-semibold">Tu carrito está vacío</p>
                  <p className="mt-1 text-[12px] text-ink/55">Agrega un producto para continuar.</p>
                  <button
                    type="button"
                    onClick={close}
                    className="mt-5 rounded-sm bg-leaf px-5 py-2.5 text-[12px] font-semibold text-white hover:bg-forest"
                  >
                    Seguir comprando
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-mist">
                  {items.map(({ product, quantity }) => (
                    <li key={product.id} className="flex gap-3 py-4">
                      <img src={product.img} alt="" className="h-20 w-20 shrink-0 rounded-sm bg-white object-contain" />
                      <div className="min-w-0 flex-1">
                        <h3 className="text-[13px] font-semibold leading-snug">{product.name}</h3>
                        <p className="mt-1 text-[12px] font-semibold text-leaf-dark">{formatPrice(product.price)}</p>
                        <div className="mt-3 flex items-center gap-2">
                          <button
                            type="button"
                            aria-label={`Quitar una unidad de ${product.name}`}
                            onClick={() => onQuantityChange(product.id, quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center border border-mist bg-white text-sm"
                          >
                            −
                          </button>
                          <span className="min-w-5 text-center text-[12px]">{quantity}</span>
                          <button
                            type="button"
                            aria-label={`Añadir una unidad de ${product.name}`}
                            onClick={() => onQuantityChange(product.id, quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center border border-mist bg-white text-sm"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => onQuantityChange(product.id, 0)}
                            className="ml-2 text-[11px] text-ink/50 underline underline-offset-2 hover:text-ink"
                          >
                            Quitar
                          </button>
                        </div>
                      </div>
                      <p className="shrink-0 text-[12px] font-semibold">
                        {formatPrice(product.price * quantity)}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <footer className="border-t border-mist bg-white px-5 py-5 sm:px-8">
                <div className="flex justify-between text-[13px]">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatPrice(subtotal)}</span>
                </div>
                <p className="mt-1 text-[11px] text-ink/50">El costo de envío se confirma por separado.</p>
                <button
                  type="button"
                  onClick={() => setStep("payment")}
                  className="mt-4 w-full rounded-sm bg-leaf px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-forest"
                >
                  Continuar a entrega y pago
                </button>
              </footer>
            )}
          </>
        ) : (
          <form onSubmit={submitDemo} className="flex-1 overflow-y-auto px-5 py-5 sm:px-8">
            <div className="mb-5 border-b border-mist pb-4">
              <div className="flex justify-between text-[13px]">
                <span>{items.reduce((sum, item) => sum + item.quantity, 0)} artículos</span>
                <span className="font-semibold">{formatPrice(subtotal)}</span>
              </div>
              <p className="mt-1 text-[11px] text-ink/50">Envío no incluido</p>
            </div>

            <fieldset className="space-y-3">
              <legend className="mb-1 text-[13px] font-semibold">Datos de entrega</legend>
              <label className="block text-[11px] font-medium text-ink/70">
                Nombre completo
                <input required autoComplete="name" className={fieldClass} placeholder="Nombre y apellido" />
              </label>
              <label className="block text-[11px] font-medium text-ink/70">
                Correo electrónico
                <input required type="email" autoComplete="email" className={fieldClass} placeholder="nombre@correo.com" />
              </label>
              <label className="block text-[11px] font-medium text-ink/70">
                Dirección de entrega
                <input required autoComplete="street-address" className={fieldClass} placeholder="Dirección, distrito y ciudad" />
              </label>
            </fieldset>

            <fieldset className="mt-6 space-y-3">
              <legend className="mb-1 text-[13px] font-semibold">Datos de tarjeta</legend>
              <p className="text-[11px] leading-relaxed text-ink/55">
                Demostración local: no ingreses datos reales. La tarjeta no se envía ni se guarda y no se realizará ningún cobro.
              </p>
              <label className="block text-[11px] font-medium text-ink/70">
                Nombre en la tarjeta
                <input required autoComplete="off" className={fieldClass} placeholder="Nombre como aparece en la tarjeta" />
              </label>
              <label className="block text-[11px] font-medium text-ink/70">
                Número de tarjeta
                <input
                  required
                  inputMode="numeric"
                  autoComplete="off"
                  pattern="[0-9 ]{13,19}"
                  maxLength={19}
                  className={fieldClass}
                  placeholder="0000 0000 0000 0000"
                />
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="block text-[11px] font-medium text-ink/70">
                  Vencimiento
                  <input required autoComplete="off" pattern="(0[1-9]|1[0-2])/[0-9]{2}" maxLength={5} className={fieldClass} placeholder="MM/AA" />
                </label>
                <label className="block text-[11px] font-medium text-ink/70">
                  CVC
                  <input required inputMode="numeric" autoComplete="off" pattern="[0-9]{3,4}" maxLength={4} className={fieldClass} placeholder="123" />
                </label>
              </div>
            </fieldset>

            {demoMessage && (
              <p role="status" className="mt-4 rounded-sm border border-leaf/20 bg-mist px-3 py-2.5 text-[12px] text-leaf-dark">
                {demoMessage}
              </p>
            )}
            <button type="submit" className="mt-5 w-full rounded-sm bg-ink px-5 py-3 text-[13px] font-semibold text-white transition hover:bg-forest">
              Validar formulario de prueba
            </button>
          </form>
        )}
      </section>
    </main>
  );
}