import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await fetch("https://shopania.vercel.app/product");
  const product = await res.json();
  const products = product.slice(0, 6);
  return (
    <div>
      <section className="bg-white text-gray-900">
        <div className="mx-auto flex lg:max-w-9/12 md:max-w-10/12 flex-col items-center px-6 py-16 text-center sm:py-24">
          {/* Eyebrow */}
          <div className="mb-4 text-xs font-medium uppercase tracking-widest text-gray-500">
            New arrivals every week
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
            Shopania
          </h1>

          {/* Subheading */}
          <p className="mt-4 max-w-2xl text-base text-gray-600 sm:text-lg">
            Thoughtfully curated products at great value — quality you can feel,
            prices you’ll love.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Shop Now
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              Browse Categories
            </Link>
          </div>

          {/* Text highlights */}
          <div className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-2 text-sm text-gray-600 sm:grid-cols-2">
            <p>
              <span className="font-semibold text-gray-900">Great value</span>{" "}
              on curated picks
            </p>
            <p>
              <span className="font-semibold text-gray-900">Easy returns</span>{" "}
              with clear policies
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Secure checkout
              </span>{" "}
              with trusted providers
            </p>
            <p>
              <span className="font-semibold text-gray-900">
                Responsive support
              </span>{" "}
              when you need it
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white text-gray-900">
        <div className="mx-auto lg:max-w-9/12 md:max-w-10/12  px-6 py-16">
          {/* Section header */}
          <div className="mb-8 text-center sm:mb-10 sm:text-left">
            <h2 className="text-2xl font-bold sm:text-3xl">
              Featured Products
            </h2>
            <p className="mt-2 text-sm text-gray-600 sm:text-base">
              Handpicked picks that pair quality with great value.
            </p>
          </div>

          {/* Grid (6 cards) */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((p) => (
              <article
                key={p._id}
                className="card rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <figure className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="h-48 w-full object-cover sm:h-52"
                  />
                </figure>
                <div className="card-body flex-col justify-between p-5">
                  <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                    {p.category}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    <a href={`/products/${p._id}`} className="hover:underline">
                      {p.name}
                    </a>
                  </h3>
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
          </div>
        </div>
      </section>
    </div>
  );
}
