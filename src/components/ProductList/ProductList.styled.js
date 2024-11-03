import styled from 'styled-components';

export const ProductList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  row-gap: 60px;
  flex: 1;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const PageButton = styled.button`
  margin: 0 5px;
  padding: 10px 15px;
  cursor: pointer;
  border: none;
  background-color: ${({ active }) => (active ? '#3A4980' : '#f0f0f0')};
  color: ${({ active }) => (active ? 'white' : 'black')};
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #3A4980;
    color: white;
  }
`;