
import React from "react";
import { HERO_BACKGROUND } from "@/constants";
import FilterSection from "@/components/filters/FilterSection";
import PropertyCard from "@/components/listings/PropertyCard";
import { PROPERTYLISTINGSAMPLE } from "@/constants";



const HomePage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[60vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${HERO_BACKGROUND})` }}
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
      <FilterSection />

       {/* Listing Section */}
      <section className="max-w-7xl mx-auto px-4 py-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {PROPERTYLISTINGSAMPLE.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </section>
    </>
  );
};

export default HomePage;
