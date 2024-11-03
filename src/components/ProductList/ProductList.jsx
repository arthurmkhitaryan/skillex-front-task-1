import React, { useState } from 'react';
import * as S from './ProductList.styled';
import { ProductCard } from '../ProductCard';

function ProductList({ products }) {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const totalPages = Math.ceil(products.length / productsPerPage);
  
  const currentProducts = products.slice((currentPage - 1) * productsPerPage, currentPage * productsPerPage);

  return (
    <S.ProductList>
      <S.ProductListContainer>
        {currentProducts.map((product) => (
          <ProductCard key={product.id} product={product}/>
        ))}
      </S.ProductListContainer>
      <S.PaginationContainer>
        {Array.from({ length: totalPages }, (_, index) => (
          <S.PageButton
            data-testid='page-btn'
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            active={currentPage === index + 1}
          >
            {index + 1}
          </S.PageButton>
        ))}
      </S.PaginationContainer>
    </S.ProductList>
  );
}

export default ProductList;
