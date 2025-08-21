import Image from "next/image";
import Link from "next/link";

export default async function Page({ params }) {
  const res = await fetch("http://localhost:3000/product", {
    cache: "force-cache",
  });
  const products = await res.json();
  const product = products.find((p) => p._id === params.id);
  return (
    <main className="bg-white text-gray-900">
      <div className="mx-auto min-h-screen lg:max-w-8/12 max-w-11/12 px-6 py-12">
        <div className="grid grid-cols-1 gap-8 md:gap-20 md:grid-cols-2">
          {/* Single image */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={600}
              height={600}
              className="h-80 w-full object-cover sm:h-[28rem]"
              loading="eager"
            />
          </div>

          {/* Basic details */}
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-gray-500">
              {product.category}
            </p>
            <h1 className="mt-1 text-2xl font-bold sm:text-3xl">
              {product.name}
            </h1>
            <div className="mt-4 text-3xl font-extrabold">
              Price: ${product.price}
            </div>
            <p className="mt-4 text-gray-700">{product.description}</p>
            <Link
              href="/products"
              className="btn btn-success rounded-lg text-white mt-4"
            >
              Back to Products
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
