import styled from 'styled-components';

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 305px;
  height: 600px;
`;

export const ProductImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 305px;
  padding: 20px 35px;
  background-color: #F7F5F7;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`;

export const ProductImage = styled.img`
  width: 100%;
`;

export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`;

export const ProductName = styled.h3`
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ProductDetail = styled.p`
  font-size: 14px;
  margin: 5px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 500;

  span {
    font-size: 18px;
    font-weight: bold;
  }
`;

export const ProductCardActions = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export const AddToCard = styled.button`
  border: none;
  outline: none;
  background-color: #3A4980;
  color: #FFFFFF;
  padding: 8px 24px;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
`;

export const AddShortlist = styled.button`
  border: 1px solid #3A4980;
  outline: none;
  background-color: #FFFFFF;
  color: #3A4980;
  padding: 8px 24px;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
`;