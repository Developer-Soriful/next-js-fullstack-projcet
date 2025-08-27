"use client";

import { signIn, useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/products");
    }
  }, [status, router]);

  const handleSignIn = () => {
    signIn("google");
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center h-screen text-gray-500 text-lg">
        Loading...
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="max-w-sm w-full bg-white rounded-2xl shadow-xl p-10">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Welcome Back
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Sign in to access your products and dashboard
        </p>
        <button
          onClick={handleSignIn}
          className="w-full flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-700 transition duration-300"
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 488 512"
            fill="currentColor"
          >
            <path d="M488 261.8c0-17.8-1.5-35-4.3-51.7H249v97.8h134.2c-5.8 31.2-23 57.8-49 75.5l79.2 61c46.2-42.5 73-105.2 73-182.6zM249 492c67.6 0 124.4-22.3 165.8-60.4l-79.2-61c-21.9 14.7-50 23.4-86.6 23.4-66.6 0-123-44.9-143.1-105.3l-81.2 62.6C65 423.4 151.3 492 249 492zM105.9 302.7c-4.6-13.7-7.2-28.2-7.2-43s2.6-29.3 7.2-43l-81.2-62.6C7.3 197.8 0 222.5 0 257.7s7.3 59.9 24.7 103.6l81.2-62.6zM249 97c35.5 0 67.3 12.2 92.3 36.3l69.3-69.3C373.5 31.6 313.4 0 249 0 151.3 0 65 68.6 24.7 163.3l81.2 62.6C126 141.9 182.4 97 249 97z"/>
          </svg>
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
