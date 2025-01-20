import Link from 'next/link';
import React from 'react';
import { urlFor } from '@/sanity/lib/image'; // Ensure the correct path for the urlFor function

// Define the types for Product and its props
type Product = {
  Title: string;
  Paragraph: string;
  image: any;
  slug: string;
};

const ProductList = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.slug} data={product} />
      ))}
    </div>
  );
};

const ProductCard = ({ data }: { data: Product }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Use Link without <a> tag */}
      <Link href={`/product/${data.slug}`}>
        <img
          className="p-8 rounded-t-lg"
          src={urlFor(data.image).url()}
          alt={data.Title}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/product/${data.slug}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.Title}
          </h5>
        </Link>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{data.Paragraph}</p>
        <div className="flex items-center justify-between mt-4">
          {/* Remove <a> and use Link directly */}
          <Link href={`/product/${data.slug}`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View Product
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
