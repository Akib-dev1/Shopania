import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "AirLite Smart Lamp",
      slug: "airlite-smart-lamp",
      category: "Home",
      price: "$29.99",
      rating: 4.7,
      reviews: 188,
      description:
        "A compact, modern lamp with multiple brightness modes and a minimal footprint.",
    },
    {
      id: 2,
      name: "FlexiFold Storage Box",
      slug: "flexifold-storage-box",
      category: "Organization",
      price: "$14.50",
      rating: 4.5,
      reviews: 96,
      description:
        "Durable foldable box to keep your desk or wardrobe tidy without bulk.",
    },
    {
      id: 3,
      name: "HydroTrack Bottle",
      slug: "hydrotrack-bottle",
      category: "Lifestyle",
      price: "$19.00",
      rating: 4.6,
      reviews: 245,
      description:
        "Lightweight bottle with time markers to help you stay on top of hydration.",
    },
    {
      id: 4,
      name: "GripCharge Cable (2m)",
      slug: "gripcharge-cable-2m",
      category: "Tech",
      price: "$9.99",
      rating: 4.4,
      reviews: 412,
      description:
        "Tangle-resistant charging cable with reinforced joints for daily reliability.",
    },
    {
      id: 5,
      name: "UrbanCarry Tote",
      slug: "urbancarry-tote",
      category: "Bags",
      price: "$24.00",
      rating: 4.5,
      reviews: 133,
      description:
        "Everyday tote with inner pockets—light, sturdy, and easy to clean.",
    },
    {
      id: 6,
      name: "ZenPad Desk Mat",
      slug: "zenpad-desk-mat",
      category: "Workspace",
      price: "$17.50",
      rating: 4.8,
      reviews: 321,
      description:
        "Soft-touch mat that keeps your desk organized and your mouse glide smooth.",
    },
  ];
  return (
    <div>
      <section className="bg-white text-gray-900">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center sm:py-24">
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
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              Browse Categories
            </a>
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
        <div className="mx-auto max-w-6xl px-6 py-16">
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
                key={p.id}
                className="card rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md"
              >
                <figure className="relative overflow-hidden rounded-t-xl">
                  <Image
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-48 w-full object-cover sm:h-52"
                  />
                </figure>
                <div className="card-body p-5">
                  <div className="text-xs font-medium uppercase tracking-widest text-gray-500">
                    {p.category}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-gray-900">
                    <a href={`/product/${p.slug}`} className="focus:underline">
                      {p.name}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">
                    {p.description}
                  </p>

                  <div className="mt-4 flex items-baseline justify-between">
                    <span className="text-xl font-bold">{p.price}</span>
                    <span className="text-xs text-gray-500">
                      {p.rating}★ ({p.reviews})
                    </span>
                  </div>

                  <div className="mt-5">
                    <a
                      href={`/product/${p.slug}`}
                      className="btn w-full rounded-lg bg-gray-900 text-white hover:bg-gray-800"
                    >
                      View Product
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* View all (mobile) */}
          <div className="mt-10 text-center sm:hidden">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              View All Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
