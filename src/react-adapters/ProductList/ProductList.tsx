// adapters/react/components/ProductList.tsx
import React, { useEffect, useState } from 'react';
import { ProductService } from '../../application/usecases/ProductService';
import { AxiosProductRepository } from '../../adapters/axios/AxiosProductRepository';
import { IProduct } from '../../domain/Product';

const productService = new ProductService(new AxiosProductRepository());

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  console.log('aaa',import.meta.env.VITE_API);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await productService.getAllProducts();
        setProducts(data);
      } catch (error) {
        setError('Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}: ${product.price}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
