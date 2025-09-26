import React from "react";
import { PropertyProps } from "@/interfaces";
import Image from 'next/image';

interface PropertyCardProps {
  property: PropertyProps;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden hover:shadow-lg transition duration-300 cursor-pointer">
      <div className="relative h-48 w-full">
      <Image
          src={property.image}
          alt={property.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{property.name}</h3>
        <div className="flex items-center justify-between mt-2">
          <span className="text-red-500 font-bold text-xl">
            ${property.price}
          </span>
          <span className="text-yellow-500 text-sm">⭐ {property.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
