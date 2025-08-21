"use client";
import React from "react";
import Swal from "sweetalert2";

const page = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    const res = await fetch("http://localhost:3000/product", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const postedResponse = await res.json();
    if (postedResponse.insertedId) {
      Swal.fire({
        title: "Product Added!",
        icon: "success",
      });
      e.target.reset();
    }
  };
  return (
    <main className="bg-white text-gray-900">
      <div className="mx-auto lg:max-w-6/12 md:max-w-8/12 max-w-11/12 px-6 py-12 sm:py-16">
        <header className="mb-8 sm:mb-10">
          <h1 className="text-2xl font-bold sm:text-3xl">Add Product</h1>
          <p className="mt-2 text-sm text-gray-600 sm:text-base">
            Fill out the details below to add a new item to your catalog.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Image URL */}
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-sm font-medium text-gray-800"
            >
              Image URL
            </label>
            <input
              id="imageUrl"
              name="imageUrl"
              type="url"
              inputMode="url"
              required
              placeholder="https://example.com/image.jpg"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Product Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-800"
            >
              Product Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="e.g., AirLite Smart Lamp"
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            />
          </div>

          {/* Product Description */}
          <div>
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-800"
            >
              Product Description
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={5}
              placeholder="Briefly describe the product, key features, and use cases."
              className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            ></textarea>
          </div>

          {/* Price + Category */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-800"
              >
                Product Price (USD)
              </label>
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                min="0"
                required
                placeholder="29.99"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-800"
              >
                Product Category
              </label>
              <select
                id="category"
                name="category"
                required
                defaultValue=""
                className="mt-2 w-full cursor-pointer rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              >
                <option value="" disabled>
                  Select a category
                </option>
                <option>Home</option>
                <option>Organization</option>
                <option>Lifestyle</option>
                <option>Tech</option>
                <option>Bags</option>
                <option>Workspace</option>
                <option>Audio</option>
                <option>Kitchen</option>
                <option>Accessories</option>
                <option>Cleaning</option>
                <option>Outdoors</option>
                <option>Lighting</option>
              </select>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a
              href="/products"
              className="inline-flex items-center justify-center rounded-xl border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            >
              Cancel
            </a>
            <button
              type="submit"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Save Product
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default page;
