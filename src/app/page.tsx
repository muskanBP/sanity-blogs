import React from 'react';
import BlogList from '../app/components/hero'; // Rename Hero to BlogList
import { client } from '@/sanity/lib/client';
import 'dotenv/config';

// Fetch blogs from Sanity
const getBlogs = async () => {
  try {
    const blogs = await client.fetch(`*[_type == 'blog'] | order(_updatedAt asc) {
      Title,
      Paragraph,
      image,
      "slug": slug.current
    }`);
    return blogs;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return [];
  }
};

// Main Home Component
export default async function Home() {
  const blogs = await getBlogs(); // Get the blogs, not products

  return (
    <div>
      {blogs.length > 0 ? (
        <BlogList blogs={blogs} /> // Pass blogs to BlogList (not Hero)
      ) : (
        <p>No blogs available</p>
      )}
      
    </div>
  );
}
