import React from "react";
import { useRouter } from "next/router";
import ProductDisplay from "@/components/listings/ProductDisplay";
import { PRODUCTSAMPLELIST } from "@/constants";

import { ProductProps } from "@/interfaces";

interface CartItem {
  product: ProductProps;
  quantity: number;
}

interface ProductDetailPageProps {
  addToCart?: (product: ProductProps) => void;
  removeFromCart?: (product: ProductProps) => void;
  cart?: CartItem[];
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = (props) => {
  const router = useRouter();
  const { id } = router.query;

  // Find product by index (for demo; ideally use a unique id)
  const product = PRODUCTSAMPLELIST[Number(id)];

  if (!product) {
    return <div className="text-center mt-10">Product not found.</div>;
  }

  return <ProductDisplay product={product} addToCart={props.addToCart} />;
};

export default ProductDetailPage;
