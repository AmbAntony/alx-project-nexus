'use client';

import React, { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';

// Types
interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

interface PillProps {
  filter: FilterOption;
  onClick: (filterId: string) => void;
}

interface FilterComponentProps {
  filters: FilterOption[];
  sortBy: string;
  onFilterChange: (filterId: string) => void;
  onSortChange: (sortValue: string) => void;
}

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

// Pill Component
const Pill: React.FC<PillProps> = ({ filter, onClick }) => {
  return (
    <button
      onClick={() => onClick(filter.id)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
        filter.active
          ? 'bg-[#34967C] text-white'
          : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
      }`}
    >
      {filter.label}
    </button>
  );
};

// Filter Component (Desktop only)
const FilterComponent: React.FC<FilterComponentProps> = ({
  filters,
  sortBy,
  onFilterChange,
  onSortChange
}) => {
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const allFilter = filters.find(f => f.id === 'all');
  const otherFilters = filters.filter(f => f.id !== 'all');

  const sortOptions = [
    { value: 'highest-price', label: 'Highest Price' },
    { value: 'lowest-price', label: 'Lowest Price' },
    { value: 'rating', label: 'Rating' },
    { value: 'popularity', label: 'Popularity' }
  ];

  const toggleSortDropdown = () => setIsSortDropdownOpen(!isSortDropdownOpen);

  return (
    <div className="bg-white py-4 sticky top-0 z-30 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Left side - Filters (Desktop only) */}
          <div className="flex items-center gap-5 flex-1">
            <div className="flex items-center gap-5">
              {allFilter && (
                <Pill filter={allFilter} onClick={onFilterChange} />
              )}
              {otherFilters.map((filter) => (
                <Pill key={filter.id} filter={filter} onClick={onFilterChange} />
              ))}
            </div>
          </div>

          {/* Right side - Filter and Sort */}
          <div className="flex items-center gap-3">
            {/* Filter Button */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-sm font-medium">
              <Filter className="w-4 h-4" />
              Filter
            </button>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={toggleSortDropdown}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 text-sm font-medium"
              >
                <span className="hidden sm:inline">Sort by:</span>
                <span className="font-medium">
                  {sortOptions.find(opt => opt.value === sortBy)?.label || 'Highest Price'}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isSortDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isSortDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg min-w-[160px] z-40">
                  <div className="py-2">
                    {sortOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          onSortChange(option.value);
                          setIsSortDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${
                          sortBy === option.value ? 'text-[#34967C] font-medium' : 'text-gray-700'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for dropdowns */}
      {isSortDropdownOpen && (
        <div
          className="fixed inset-0 z-30"
          onClick={() => setIsSortDropdownOpen(false)}
        />
      )}
    </div>
  );
};

// Demo Component showing usage
const HeroFilterDemo: React.FC = () => {
  const [filters, setFilters] = useState<FilterOption[]>([
    { id: 'all', label: 'All', active: true },
    { id: 'shirts', label: 'Shirts', active: false },
    { id: 'jeans', label: 'Jeans', active: false },
    { id: 'polos', label: 'Polos', active: false },
    { id: 'accessories', label: 'Accessories', active: false },
  ]);

  const [sortBy, setSortBy] = useState('highest-price');

  const handleFilterChange = (filterId: string) => {
    setFilters(prevFilters =>
      prevFilters.map(filter => ({
        ...filter,
        active: filter.id === filterId
      }))
    );
  };

  const handleSortChange = (sortValue: string) => {
    setSortBy(sortValue);
  };

  return (
   
       <div className="container mx-auto bg-gray-50">
     
      <FilterComponent
        filters={filters}
        sortBy={sortBy}
        onFilterChange={handleFilterChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default HeroFilterDemo;
export { FilterComponent, Pill };
export type { FilterOption, HeroSectionProps, FilterComponentProps, PillProps };
