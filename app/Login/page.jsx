// app/login/page.js
"use client";
import { signIn } from "next-auth/react";

export default function LoginPage() {
  const handleSignIn = () => {
    signIn("google", { callbackUrl: "/products" });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-6">Login</h1>
      <button
        onClick={handleSignIn}
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Sign in with Google
      </button>
    </div>
  );
}
