import Header from "./Header";
import Footer from "./Footer";
import ShoppingCart from "@/components/listings/ShoppingCart";
import React, { useState } from "react";

import { ProductProps } from "@/interfaces";

interface CartItem {
  product: ProductProps;
  quantity: number;
}

interface LayoutProps {
  children: React.ReactNode;
}


const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  // Add product to cart or update quantity
  const addToCart = (product: ProductProps) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.name === product.name);
      if (idx > -1) {
        // Limit to 3 per product
        if (prev[idx].quantity < 3) {
          const updated = [...prev];
          updated[idx].quantity += 1;
          return updated;
        }
        return prev;
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  // Remove product from cart
  const removeFromCart = (product: ProductProps) => {
    setCart(prev => {
      const idx = prev.findIndex(item => item.product.name === product.name);
      if (idx > -1) {
        const updated = [...prev];
        if (updated[idx].quantity > 1) {
          updated[idx].quantity -= 1;
          return updated;
        } else {
          updated.splice(idx, 1);
          return updated;
        }
      }
      return prev;
    });
  };

  // Pass cart and handlers to children via context or props
  return (
    <>
      <Header cart={cart} setCartOpen={setCartOpen} />
      <main className="min-h-screen">
        {React.isValidElement(children)
          ? React.cloneElement(children, { addToCart, removeFromCart, cart })
          : children}
      </main>
      <Footer />
      {cartOpen && <ShoppingCart cart={cart} onClose={() => setCartOpen(false)} />}
    </>
  );
}

export default Layout;