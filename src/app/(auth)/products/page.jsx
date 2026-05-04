import ProductCard from '@/componets/homepage/ProductCard';
import { getProduct } from '@/lib/loadproducts';
import React from 'react';

const ProductPage = async() => {
    const products = await getProduct()
    return (
        <div className="max-w-7xl px-4 mx-auto py-10">
      <h1 className="font-semibold text-3xl text-center pb-5">All Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          products.map(product => <ProductCard key={product.id} product = {product}></ProductCard>)
        }
      </div>
    </div>
    );
};

export default ProductPage;