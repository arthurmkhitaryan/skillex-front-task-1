import React from 'react';
import * as S from './ProductCard.styled';

function ProductCard({ product }) {
  return (
    <S.ProductCard key={product.id}>
      <S.ProductImageWrapper>
        <S.ProductImage src={product.image} alt={product.title} />
      </S.ProductImageWrapper>
      <S.ProductInfo>
        <S.ProductName>{product.title}</S.ProductName>
        <S.ProductDetail><span>Category:</span> {product.category}</S.ProductDetail>
        <S.ProductDetail><span>Price:</span> ${product.price.toFixed(2)}</S.ProductDetail>
        <S.ProductDetail><span>Rating:</span> {product.rating.rate} ({product.rating.count} reviews)</S.ProductDetail>
      </S.ProductInfo>
      <S.ProductCardActions>
        <S.AddToCard>Add to Cart</S.AddToCard>
        <S.AddShortlist>Add Shortlist</S.AddShortlist>
      </S.ProductCardActions>
    </S.ProductCard>
  );
}

export default ProductCard;
