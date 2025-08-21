"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { registerUser } from "../auth/registerUser";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";

const page = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const userData = Object.fromEntries(formData);
    const result = await registerUser(userData);
    if (result.insertedId) {
      Swal.fire({
        title: "Success!",
        text: "Your account has been created.",
        icon: "success",
        confirmButtonText: "OK",
      });
      router.push("/login");
      e.target.reset();
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
        <div className="text-center">
          <h1 className="text-2xl font-bold sm:text-3xl">
            Create your account
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Join Shopania to start exploring great products
          </p>
        </div>

        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
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

          <div className="my-6 flex items-center gap-4">
            <div className="h-px w-full bg-gray-200"></div>
            <div className="text-xs uppercase tracking-wider text-gray-500">
              or
            </div>
            <div className="h-px w-full bg-gray-200"></div>
          </div>

          <form
            method="post"
            className="space-y-6"
            noValidate
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-800"
              >
                Full name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>

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

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-800"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                required
                minLength={6}
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-900/10"
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-900/30"
            >
              Create account
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-gray-900 hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
};

export default page;
