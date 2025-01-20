// src/sanity/schemaTypes/blog.ts

import { defineType, defineField } from 'sanity';

export const Blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'Title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'Paragraph',
      type: 'string',
      title: 'Paragraph',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'Title',
      },
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'block',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
    }),
    defineField({
        name: 'author',
        type: 'reference',
        title: 'Author',
        to: [{ type: 'author' }],
        }),
  ],
});
