import { useState } from "react";
import { PRODUCTS } from "./data";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Triumph from "./components/Triumph";
import Brewing from "./components/Brewing";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Banner from "./components/Banner";
import Energize from "./components/Energize";
import Ritual from "./components/Ritual";
import Reviews from "./components/Reviews";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import CartCheckout from "./components/CartCheckout";

export default function App() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (productId: string) => {
    setQuantities((current) => ({
      ...current,
      [productId]: (current[productId] ?? 0) + 1,
    }));
  };

  const setQuantity = (productId: string, quantity: number) => {
    setQuantities((current) => {
      const next = { ...current };
      if (quantity <= 0) delete next[productId];
      else next[productId] = quantity;
      return next;
    });
  };

  const cartItems = PRODUCTS.flatMap((product) => {
    const quantity = quantities[product.id] ?? 0;
    return quantity > 0 ? [{ product, quantity }] : [];
  });
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  if (cartOpen) {
    return (
      <CartCheckout
        items={cartItems}
        onClose={() => setCartOpen(false)}
        onQuantityChange={setQuantity}
      />
    );
  }

  return (
    <div id="home" className="min-h-screen overflow-x-clip bg-cream font-sans text-ink">
      <Navbar cartCount={cartCount} onCartClick={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Marquee />
        <Triumph />
        <Brewing />
        <Benefits />
        <Products onAdd={addToCart} />
        <Banner />
        <Energize />
        <Ritual />
        <Reviews />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
