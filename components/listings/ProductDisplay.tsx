import React, { useState } from "react";
import { ProductProps } from "@/interfaces";
import Image from "next/image";

interface ProductDisplayProps {
  product: ProductProps;
  addToCart?: (product: ProductProps) => void;
}


const ProductDisplay: React.FC<ProductDisplayProps> = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(0);
  const handleAddToCart = () => {
    if (addToCart && quantity > 0) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
      setQuantity(0);
    }
  };

  const handleAdd = () => {
    if (quantity < 3) {
      setQuantity(quantity + 1);
    }
  };

  const handleRemove = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg p-6 max-w-3xl mx-auto mt-10">
      {/* Image on the left */}
      <div className="md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
        <Image
          src={product.image}
          alt={product.name}
          width={350}
          height={350}
          className="object-cover rounded-lg"
        />
      </div>
      {/* Details on the right */}
      <div className="md:w-1/2 flex flex-col justify-center items-start px-6">
        <h2 className="text-2xl font-bold mb-2 font-serif">{product.name}</h2>
        <div className="flex items-center mb-4">
          <span className="text-yellow-500 text-lg mr-2">★</span>
          <span className="text-lg font-medium">{product.rating}</span>
        </div>
        <span className="text-red-500 font-bold text-2xl mb-4">${product.price}</span>
        <div className="flex items-center gap-4 mt-4">
          <button
            className="px-4 py-2 rounded bg-gray-200 text-gray-700 font-bold text-xl"
            onClick={handleRemove}
            disabled={quantity === 0}
          >
            -
          </button>
          <span className="text-lg font-semibold">{quantity}</span>
          <button
            className="px-4 py-2 rounded bg-[#34967C] text-white font-bold text-xl disabled:bg-gray-400"
            onClick={handleAdd}
            disabled={quantity === 3}
          >
            +
          </button>
        </div>
        {/* Cart summary and Add to Cart button */}
        {quantity > 0 && (
          <div className="mt-6 w-full">
            <h3 className="text-lg font-bold mb-2">Cart Items: {quantity}</h3>
            <ul className="mb-2">
              <li className="flex justify-between items-center py-1 border-b text-sm">
                <span>{product.name}</span>
                <span className="text-red-500 font-semibold">${product.price} x {quantity}</span>
              </li>
            </ul>
            <div className="font-bold text-xl mb-4">Total: ${totalPrice}</div>
            <button
              className="px-6 py-2 rounded bg-[#34967C] text-white font-semibold w-full"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;
