"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const page = () => {
  const [show, setShow] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { email, password } = Object.fromEntries(formData.entries());
    try {
      const res = await signIn("credentials", {
        email,
        password,
        callbackUrl: "/products",
        redirect: false,
      });
      if (res.ok) {
        router.push("/products");
        e.target.reset();
      } else {
        alert("Login failed. Please check your credentials.");
      }
    } catch (error) {
      alert("Login failed. Please check your credentials.");
    }
  };
  const handleGoogle = () => {
    signIn("google");
  };
  useEffect(() => {
    if (session?.user) {
      router.push("/products");
    }
  }, [session?.user]);
  return (
    <main className="bg-white text-gray-900">
      <div className="mx-auto min-h-screen max-w-md px-6 py-16">
        <header className="text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">Welcome back</h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to continue to Shopania
          </p>
        </header>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-800"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={show ? "text" : "password"}
                  autoComplete="current-password"
                  required
                  placeholder="••••••••"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 pr-20 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                />
                <button
                  type="button"
                  onClick={() => setShow((s) => !s)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-medium text-gray-600 hover:text-gray-900"
                  aria-pressed={show}
                  aria-label={show ? "Hide password" : "Show password"}
                >
                  {show ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Sign in
            </button>
            <button
              onClick={handleGoogle}
              className="btn w-full rounded-xl bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            {/* Secondary */}
            <p className="text-center text-sm text-gray-600">
              New to Shopania?{" "}
              <Link
                href="/register"
                className="font-semibold text-gray-900 hover:underline"
              >
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
