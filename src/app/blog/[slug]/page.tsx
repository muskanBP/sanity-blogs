import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { PortableText } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";

export default async function page({ params }: { params: { slug: string } }) {
  // Fetch slug asynchronously
  const { slug } = await params; // Ensure params is awaited

  // Fetch data from Sanity based on the slug
  const query = `*[_type == 'blog' && slug.current == '${slug}']{
    Title, Paragraph, image, block,
    author->{bio, image, name}
  }[0]`;

  const data = await client.fetch(query);

  // Check if data exists
  if (!data) {
    return <div>Blog post not found.</div>;
  }

  // Check if the image exists before rendering it
  const featuredImage = data.image ? urlFor(data.image).width(1200).height(800).url() : null;
  const authorImage = data.author?.image ? urlFor(data.author.image).width(200).height(200).url() : null;

  return (
    <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
      {/* Blog Title */}
      <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
        {data.Title}
      </h1>

      {/* Featured Image */}
      {featuredImage && (
        <Image
          src={featuredImage}
          alt={data.Title} // Add alt attribute for accessibility
          width={1200} // Set width
          height={800} // Set height
          className="object-cover"
        />
      )}

      {/* Blog Summary Section */}
      <section>
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
          Summary
        </h2>
        {data.Paragraph}
      </section>

      {/* Author Section (Image & Bio) */}
      <section className="px-2 sm:px-8 md:px-12 flex gap-2 xs:gap-4 sm:gap-6 items-start xs:items-center justify-start">
        {authorImage && (
          <Image
            src={authorImage}
            alt={data.author?.name || "Author"}
            width={200}
            height={200}
            className="object-cover rounded-full"
          />
        )}
        <div className="flex flex-col gap-1">
          <h3 className="text-xl font-bold text-dark dark:text-light">{data.author?.name}</h3>
          <p className="italic text-xs xs:text-sm sm:text-base text-dark/80 dark:text-light/80">
            {data.author?.bio}
          </p>
        </div>
      </section>

      {/* Main Body of Blog */}
      <section className="text-lg leading-normal text-dark/80 dark:text-light/80">
        {/* Render PortableText with custom serializers if necessary */}
        <PortableText value={data.block} />
      </section>
    </article>
  );
}
