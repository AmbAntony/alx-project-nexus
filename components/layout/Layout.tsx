import Header from "./Header";
import Footer from "./Footer";
import ShoppingCart from "@/components/listings/ShoppingCart";
import React from "react";
import { CartProvider, useCart } from "@/context/CartContext";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { cartOpen } = useCart();
  return (
    <>
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
      {cartOpen && <ShoppingCart />}
    </>
  );
};

const LayoutWithProvider: React.FC<LayoutProps> = ({ children }) => (
  <CartProvider>
    <Layout>{children}</Layout>
  </CartProvider>
);

export default LayoutWithProvider;