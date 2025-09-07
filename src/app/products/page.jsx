import Image from "next/image";
import Link from "next/link";
import React from "react";

export const dynamic = "force-dynamic";

const page = async () => {
  const res = await fetch("https://shopania.vercel.app/product", {
    cache: "force-cache",
  });
  const products = await res.json();
  return (
    <main className="bg-white text-gray-900">
      <div className="mx-auto lg:max-w-9/12 md:max-w-10/12 px-6 py-10 sm:py-16">
        {/* Header */}
        <header className="mb-8 sm:mb-10">
          <h1 className="text-2xl font-bold sm:text-3xl">All Products</h1>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Browse our full catalog of curated picks.
          </p>
        </header>

        {/* Grid: 1 / 2 / 3 columns */}
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {products.map((p) => (
            <article
              key={p._id}
              className="card rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <figure className="relative overflow-hidden rounded-t-xl">
                <Image
                  src={p.imageUrl}
                  alt={p.name}
                  loading="lazy"
                  width={400}
                  height={300}
                  className="h-48 w-full object-cover sm:h-52"
                />
              </figure>
              <div className="card-body justify-between p-5">
                <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                  {p.category}
                </div>
                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  <a href={`/products/${p._id}`} className="hover:underline">
                    {p.name}
                  </a>
                </h2>
                <p
                  className="mt-2 text-sm text-gray-600 overflow-hidden max-h-10"
                  title={p.description}
                >
                  {p.description}
                </p>

                <div className="mt-4 flex items-baseline justify-between">
                  <span className="text-xl font-bold">Price: ${p.price}</span>
                </div>

                <div className="mt-5">
                  <Link
                    href={`/products/${p._id}`}
                    className="btn w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default page;
