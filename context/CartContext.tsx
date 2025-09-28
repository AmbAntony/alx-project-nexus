import React, { createContext, useContext, useState, ReactNode } from "react";
import { ProductProps } from "@/interfaces";

export interface CartItem {
  product: ProductProps;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductProps) => void;
  removeFromCart: (product: ProductProps) => void;
  setCartOpen: (open: boolean) => void;
  cartOpen: boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product: ProductProps) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.name === product.name);
      if (idx > -1) {
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

  const removeFromCart = (product: ProductProps) => {
    setCart((prev) => {
      const idx = prev.findIndex((item) => item.product.name === product.name);
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

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, setCartOpen, cartOpen }}
    >
      {children}
    </CartContext.Provider>
  );
};
