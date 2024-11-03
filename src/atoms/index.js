import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { fetchProducts } from '../api/products';

export const productsAtom = atom([]);

export const filtersAtom = atomWithStorage('filters', {
  category: "",
  priceRange: [0, 500],
  rating: 5,
});

export const sortAtom = atomWithStorage('sort', ""); 

export const loadingAtom = atom(true);

export const searchAtom = atom(""); 

export const fetchProductsAtom = atom(null, async (get, set) => {
  set(loadingAtom, true);
  try {
    const products = await fetchProducts();
    set(productsAtom, products);
  } catch (error) {
    console.error("Error fetching products:", error);
  } finally {
    set(loadingAtom, false);
  }
});

export const filteredProductsAtom = atom((get) => {
  const products = get(productsAtom);
  const filters = get(filtersAtom);
  const search = get(searchAtom).toLowerCase();
  const sort = get(sortAtom);

  let filtered = products.filter(product => {
    const isCategoryMatch = !filters.category || product.category === filters.category;
    const isPriceInRange = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];
    const isRatingMatch = product.rating.rate <= filters.rating;
    const isSearchMatch = product.title.toLowerCase().includes(search);
    return isCategoryMatch && isPriceInRange && isRatingMatch && isSearchMatch;
  });

  if (sort === "price") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "rating") {
    filtered.sort((a, b) => b.rating.rate - a.rating.rate);
  }

  return filtered;
});
