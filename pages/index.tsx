import React, { useState } from "react";
import { BACKGROUND } from "@/constants";
import { FilterComponent, FilterOption } from "@/components/filters/FilterSection";
import ProductCard from "@/components/listings/ProductCard";
import Link from "next/link";
import { PRODUCTSAMPLELIST } from "@/constants";

const initialFilters: FilterOption[] = [
  { id: "all", label: "All", active: true },
  { id: "shirts", label: "Shirts", active: false },
  { id: "pants", label: "Pants", active: false },
  { id: "polos", label: "Polos", active: false },
  { id: "accessories", label: "Accessories", active: false },
];

const HomePage = () => {
  const [filters, setFilters] = useState<FilterOption[]>(initialFilters);
  const [sortBy, setSortBy] = useState('highest-price');

  // Handle filter change
  const handleFilterChange = (filterId: string) => {
    setFilters(prevFilters =>
      prevFilters.map(filter => ({
        ...filter,
        active: filter.id === filterId
      }))
    );
  };

  // Handle sort change
  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
  };

  // Get active filter
  const activeFilter = filters.find(f => f.active) || filters[0];

  // Filter products
  let filteredProducts = PRODUCTSAMPLELIST;
  if (activeFilter.id !== 'all') {
    filteredProducts = PRODUCTSAMPLELIST.filter(product =>
      product.category?.toLowerCase() === activeFilter.id
    );
  }

  // Sort products
  if (sortBy === 'highest-price') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === 'lowest-price') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'rating') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  } // Add more sort logic if needed

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${BACKGROUND})` }}
      >
        {/* Hero Content */}
        <div className="relative z-10 max-w-2xl flex flex-col justify-end gap-4 text-gray-900">
          <h1 className="text-6xl md:text-5xl mb-4 font-serif">
            SUMMER SALE 2025
          </h1>
          <p className="text-lg md:text-xl">
            Up to 60% off countrywide
          </p>
        </div>
      </section>

      {/* Filters */}
      <div className="container mx-auto bg-gray-50">
        <FilterComponent
          filters={filters}
          sortBy={sortBy}
          onFilterChange={handleFilterChange}
          onSortChange={handleSortChange}
        />
      </div>

      {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <Link key={index} href={`/product/${index}`} style={{ textDecoration: 'none' }}>
            <ProductCard product={product} />
          </Link>
        ))}
      </section>
    </>
  );
};

export default HomePage;