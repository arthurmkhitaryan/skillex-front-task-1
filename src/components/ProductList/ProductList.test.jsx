import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

const mockProducts = Array.from({ length: 25 }, (_, index) => ({
  id: index + 1,
  title: `Product ${index + 1}`,
  category: 'Sample Category',
  price: (index + 1) * 10,
  rating: { rate: 4.5, count: index + 1 },
  image: 'image-url',
}));

describe('ProductList Component', () => {
  test('renders correct number of ProductCards based on current page', () => {
    render(<ProductList products={mockProducts} />);
    
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(10); 

    // Click on the second page
    const secondPageButton = screen.getByText('2');
    fireEvent.click(secondPageButton);
    
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(10);
  });

  test('renders correct number of pagination buttons', () => {
    render(<ProductList products={mockProducts} />);
    
    const paginationButtons = screen.getAllByTestId('page-btn');
    expect(paginationButtons).toHaveLength(3);
  });
});
