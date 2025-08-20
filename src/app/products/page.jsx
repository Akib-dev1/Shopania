'use client'
import Image from "next/image";
import React from "react";

const page = () => {
  const products = [
    {
      id: 1,
      name: "AirLite Smart Lamp",
      slug: "airlite-smart-lamp",
      category: "Home",
      price: "$29.99",
      rating: 4.7,
      reviews: 188,
      description: "Compact modern lamp with multiple brightness modes.",
    },
    {
      id: 2,
      name: "FlexiFold Storage Box",
      slug: "flexifold-storage-box",
      category: "Organization",
      price: "$14.50",
      rating: 4.5,
      reviews: 96,
      description: "Durable foldable box to keep your space tidy.",
    },
    {
      id: 3,
      name: "HydroTrack Bottle",
      slug: "hydrotrack-bottle",
      category: "Lifestyle",
      price: "$19.00",
      rating: 4.6,
      reviews: 245,
      description: "Lightweight bottle with handy time markers.",
    },
    {
      id: 4,
      name: "GripCharge Cable (2m)",
      slug: "gripcharge-cable-2m",
      category: "Tech",
      price: "$9.99",
      rating: 4.4,
      reviews: 412,
      description: "Tangle‑resistant cable with reinforced joints.",
    },
    {
      id: 5,
      name: "UrbanCarry Tote",
      slug: "urbancarry-tote",
      category: "Bags",
      price: "$24.00",
      rating: 4.5,
      reviews: 133,
      description: "Everyday tote with inner pockets—light and sturdy.",
    },
    {
      id: 6,
      name: "ZenPad Desk Mat",
      slug: "zenpad-desk-mat",
      category: "Workspace",
      price: "$17.50",
      rating: 4.8,
      reviews: 321,
      description: "Soft‑touch mat for a tidy, comfortable desk.",
    },
    {
      id: 7,
      name: "EchoBuds Wireless",
      slug: "echobuds-wireless",
      category: "Audio",
      price: "$39.00",
      rating: 4.3,
      reviews: 210,
      description: "Compact earbuds with clear sound and quick pairing.",
    },
    {
      id: 8,
      name: "CompactChef Chopper",
      slug: "compactchef-chopper",
      category: "Kitchen",
      price: "$15.99",
      rating: 4.5,
      reviews: 178,

      description: "Handy pull‑chopper for fast prep with minimal cleanup.",
    },
    {
      id: 9,
      name: "SnapHook Keychain",
      slug: "snaphook-keychain",
      category: "Accessories",
      price: "$6.99",
      rating: 4.2,
      reviews: 89,
      description: "Sturdy metal keychain with quick‑attach clip.",
    },
    {
      id: 10,
      name: "AeroBrush Duster",
      slug: "aerobrush-duster",
      category: "Cleaning",
      price: "$12.50",
      rating: 4.4,
      reviews: 154,
      description: "Multi‑surface dusting brush for home and office.",
    },
    {
      id: 11,
      name: "TravelLite Flask",
      slug: "travellite-flask",
      category: "Outdoors",
      price: "$11.99",
      rating: 4.5,
      reviews: 132,
      description: "Slim, leak‑resistant flask that fits any bag pocket.",
    },
    {
      id: 12,
      name: "GlowStrip LED",
      slug: "glowstrip-led",
      category: "Lighting",
      price: "$13.49",
      rating: 4.6,
      reviews: 267,
      description: "Flexible LED strip for ambient room lighting.",
    },
  ];
  return (
    <main className="bg-white text-gray-900">
      <div className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
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
                <h2 className="mt-1 text-lg font-semibold text-gray-900">
                  <a href={`/product/${p.slug}`} className="focus:underline">
                    {p.name}
                  </a>
                </h2>
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
        </section>
      </div>
    </main>
  );
};

export default page;
