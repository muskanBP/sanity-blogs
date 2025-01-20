import Link from 'next/link';
import React from 'react';
import { urlFor } from '@/sanity/lib/image'; // Ensure the correct path for the urlFor function

type Blog = {
  Title: string;
  Paragraph: string;
  image: any;
  slug: string;
  block: string;
};

const BlogList = ({ blogs }: { blogs: Blog[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {blogs.map((blog) => (
        <BlogCard key={blog.slug} data={blog} />
      ))}
    </div>
  );
};

const BlogCard = ({ data }: { data: Blog }) => {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* Remove the <a> tag, and directly use Link */}
      <Link href={`/blog/${data.slug}`}>
        <img
          className="p-8 rounded-t-lg"
          src={urlFor(data.image).url()}
          alt={data.Title}
        />
      </Link>
      <div className="px-5 pb-5">
        <Link href={`/blog/${data.slug}`}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {data.Title}
          </h5>
        </Link>
        <p className="text-gray-700 dark:text-gray-300 mt-2">{data.Paragraph}</p>
        <div className="flex items-center justify-between mt-4">
          {/* Remove the <a> tag here as well */}
          <Link href={`/blog/${data.slug}`}>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
