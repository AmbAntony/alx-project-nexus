import React, { useState } from "react";
import {
  FilterComponent,
  FilterOption,
} from "@/components/filters/FilterSection";
import ProductCard from "@/components/listings/ProductCard";
import Link from "next/link";
import { PRODUCTSAMPLELIST } from "@/constants"; // Assuming you import your product data
// Note: BACKGROUND and other constants might not be needed if you remove the Hero section

// Define the initial filter options (same as in HomePage)
const initialFilters: FilterOption[] = [
  { id: "all", label: "All", active: true },
  { id: "shirts", label: "Shirts", active: false },
  { id: "pants", label: "Pants", active: false },
  { id: "polos", label: "Polos", active: false },
  { id: "accessories", label: "Accessories", active: false },
];

const ShopPage = () => {
  const [filters, setFilters] = useState<FilterOption[]>(initialFilters);
  const [sortBy, setSortBy] = useState("highest-price");

  // Handle filter change
  const handleFilterChange = (filterId: string) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter) => ({
        ...filter,
        active: filter.id === filterId,
      })),
    );
  };

  // Handle sort change
  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
  };

  // Get active filter
  const activeFilter = filters.find((f) => f.active) || filters[0];

  // 1. Filter products
  let filteredProducts = PRODUCTSAMPLELIST;
  if (activeFilter.id !== "all") {
    filteredProducts = PRODUCTSAMPLELIST.filter(
      (product) => product.category?.toLowerCase() === activeFilter.id,
    );
  }

  // 2. Sort products
  if (sortBy === "highest-price") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "lowest-price") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating,
    );
  }

  return (
    <main>
      {/* Shop Title/Breadcrumbs (Optional, but good for UX) */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <h1 className="text-4xl font-bold font-serif">All Products</h1>
      </div>

      {/* Filters & Sort Controls */}
      <div className="container mx-auto bg-gray-50">
        <FilterComponent
          filters={filters}
          sortBy={sortBy}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </div>

      {/* Product Grid Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link
              key={product.name}
              href={`/product/${encodeURIComponent(product.name)}`}
              className="group block"
            >
              <ProductCard product={product} />
            </Link>
          ))
        ) : (
          // Display a message if no products are found for the selected filter/sort
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-gray-600">
              No products found for this category.
            </p>
          </div>
        )}
      </section>
    </main>
  );
};

export default ShopPage;