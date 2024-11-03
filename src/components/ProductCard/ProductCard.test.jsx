import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

// Mock product data
const mockProduct = {
  id: 1,
  title: "Sample Product",
  category: "Category Name",
  price: 19.99,
  rating: {
    rate: 4.5,
    count: 10,
  },
  image: "image-url",
};

// Test suite for ProductCard Component
describe("ProductCard Component", () => {
  test("renders product details correctly", () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText(/Sample Product/i)).toBeInTheDocument();
    expect(screen.getByText(/Category:/i)).toBeInTheDocument();
  });

  test("renders Add to Cart and Add Shortlist buttons", () => {
    render(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText(/Add to Cart/i)).toBeInTheDocument();
    expect(screen.getByText(/Add Shortlist/i)).toBeInTheDocument();
  });

  test("updates correctly when product prop changes", () => {
    const { rerender } = render(<ProductCard product={mockProduct} />);
    expect(screen.getByText(/Sample Product/i)).toBeInTheDocument();

    // Update the product prop
    const newProduct = { ...mockProduct, title: "Updated Product" };
    rerender(<ProductCard product={newProduct} />);
    
    expect(screen.getByText(/Updated Product/i)).toBeInTheDocument();
  });
});
