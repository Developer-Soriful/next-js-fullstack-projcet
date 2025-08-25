// components/shared/Navbar.js
"use client";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center space-x-4">
        <Link href="/" className="font-bold text-xl">
          My App
        </Link>
      </div>

      <div className="flex items-center space-x-4">
        <Link href="/products" className="hover:underline">
          Products
        </Link>
        {session && (
          <Link href="/dashboard/add-product" className="hover:underline">
            Add Product
          </Link>
        )}
        {session ? (
          <div className="flex items-center space-x-4">
            <p className="hidden md:block">Hi, {session.user.name}</p>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <Link
            href="/Login"
            className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition"
          >
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}
