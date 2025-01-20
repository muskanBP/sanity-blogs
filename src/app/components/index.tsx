import React from 'react';
import ProductList from './app/componens/ProductList'; // Import ProductList component
import { client } from '@/sanity/lib/client'; // Sanity client for data fetching

// Fetch products from Sanity
const getProducts = async () => {
  try {
    const products = await client.fetch(`*[_type == 'product'] | order(_updatedAt desc) {
      Title,
      Paragraph,
      image,
      "slug": slug.current
    }`);
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
};

// Home Page Component
export default async function Home() {
  const products = await getProducts(); // Fetch product data

  return (
    <div>
      {products.length > 0 ? (
        <ProductList products={products} /> // Pass products to ProductList component
      ) : (
        <p>No products available</p> // Show message if no products are available
      )}
    </div>
  );
}
