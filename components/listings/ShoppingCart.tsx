import React from "react";
import { useCart } from "@/context/CartContext";

const ShoppingCart: React.FC = () => {
  const { cart, setCartOpen, removeFromCart } = useCart();
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <div className="fixed top-0 right-0 w-96 h-full bg-white shadow-lg z-50 p-6 flex flex-col">
      <button
        className="self-end mb-4 text-gray-600 hover:text-black"
        onClick={() => setCartOpen(false)}
      >
        Close
      </button>
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <div className="text-gray-500">Your cart is empty.</div>
      ) : (
        <ul className="mb-4">
          {cart.map((item, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center py-2 border-b"
            >
              <span>
                {item.product.name} x {item.quantity}
              </span>
              <span className="text-red-500 font-semibold">
                ${item.product.price * item.quantity}
              </span>
              <button
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded text-xs"
                onClick={() => removeFromCart(item.product)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-auto font-bold text-xl">Total: ${totalPrice}</div>
    </div>
  );
};

export default ShoppingCart;
