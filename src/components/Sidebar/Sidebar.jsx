import React, { useEffect, useState } from 'react';
import { useAtom } from 'jotai';
import { filtersAtom, sortAtom, productsAtom, loadingAtom, fetchProductsAtom } from '../../atoms';
import useDebounce from '../../hooks/useDebounce';
import * as S from './Sidebar.styled';

function Sidebar() {
  const [filters, setFilters] = useAtom(filtersAtom);
  const [sort, setSort] = useAtom(sortAtom);
  const [products] = useAtom(productsAtom);
  const [loading] = useAtom(loadingAtom);
  const [, fetchProducts] = useAtom(fetchProductsAtom);

  const [minPrice, setMinPrice] = useState(filters.priceRange[0]);
  const [maxPrice, setMaxPrice] = useState(filters.priceRange[1]);
  const [rating, setRating] = useState(filters.rating);

  const debouncedMinPrice = useDebounce(minPrice, 500);
  const debouncedMaxPrice = useDebounce(maxPrice, 500);
  const debouncedRating = useDebounce(rating, 500);

  useEffect(() => {
    const loadFilters = () => {
      const savedFilters = localStorage.getItem('filters');
      if (savedFilters) {
        try {
          const parsedFilters = JSON.parse(savedFilters);
          setFilters(parsedFilters);
          setMinPrice(parsedFilters.priceRange[0]);
          setMaxPrice(parsedFilters.priceRange[1]);
          setRating(parsedFilters.rating);
        } catch (error) {
          console.error("Error parsing filters from localStorage:", error);
        }
      }
    };

    fetchProducts();
    loadFilters();
  }, [fetchProducts, setFilters]);

  useEffect(() => {
    if (debouncedMaxPrice !== filters.priceRange[1] 
        || debouncedMinPrice !== filters.priceRange[0] 
        || debouncedRating !== filters.rating) {
        setFilters((prev) => ({
            ...prev,
            priceRange: [debouncedMinPrice, debouncedMaxPrice],
            rating: debouncedRating,
        }));
    }
  }, [debouncedMinPrice, debouncedMaxPrice, debouncedRating, filters, setFilters]);

  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  const handleSortChange = (value) => {
    setSort(value);
  };

  const categories = [...new Set(products.map(product => product.category))];

  if (loading) return null;

  return (
    <S.SidebarContainer>
      <S.FilterTitle>Filters</S.FilterTitle>
      <S.Select onChange={(e) => handleFilterChange("category", e.target.value)} value={filters.category}>
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </S.Select>
      <S.Input
        type="number"
        data-testid="minPrice"
        placeholder="Min Price"
        value={minPrice}
        onChange={(e) => setMinPrice(Number(e.target.value))}
      />
      <S.Input
        type="number"
        data-testid="maxPrice"
        placeholder="Max Price"
        value={maxPrice}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
      />
      <p>Rating: {rating}</p>
      <S.Input
        type="range"
        min="0"
        max="5"
        step="0.1"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
      />
      <S.FilterTitle>Sort By</S.FilterTitle>
      <S.Select onChange={(e) => handleSortChange(e.target.value)} value={sort}>
        <option value="">None</option>
        <option value="price">Price</option>
        <option value="rating">Rating</option>
      </S.Select>
    </S.SidebarContainer>
  );
}

export default Sidebar;
