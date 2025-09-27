import React from "react";
import { ProductProps } from "@/interfaces";
import Image from 'next/image';

interface ProductCardProps {
  product: ProductProps;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
      <div className="relative h-48 w-full">
      <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 960px) 50vw, 25vw"
      />
      </div>
      <div className="p-4">
        <h3 className="text-base font-medium text-gray-800 font-serif">{product.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-red-500 font-bold text-xl">
            ${product.price}
          </span>
          <span className="text-yellow-500 text-sm">⭐ {product.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
