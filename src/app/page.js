import Image from "next/image";
import Link from "next/link";

export default function Home() {
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
    </div>
  );
}
