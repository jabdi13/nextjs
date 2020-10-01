import React from 'react';
import { useRouter } from 'next/router';

const ProductItem = () => {
  const { query: { productId} } = useRouter();

  return (
    <div>
      Está es la pagina de producto: { productId }
    </div>
  );
};

export default ProductItem;