import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { filteredProductsAtom, loadingAtom, fetchProductsAtom } from './atoms';
import ClipLoader from 'react-spinners/ClipLoader';
import { ProductList, Sidebar } from './components';
import * as S from './App.styled';

function App() {
  const [, fetchProducts] = useAtom(fetchProductsAtom);
  const [filteredProducts] = useAtom(filteredProductsAtom);
  const [loading] = useAtom(loadingAtom);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.AppContainer>
      <Sidebar />
      {loading ? (
        <S.LoaderContainer>
          <ClipLoader />
        </S.LoaderContainer>
      ) : filteredProducts.length ? (
        <ProductList products={filteredProducts} />
      ) : (
        <p>No products found</p>
      )}
    </S.AppContainer>
  );
}

export default App;
