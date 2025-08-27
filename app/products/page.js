// app/products/page.js
import Link from "next/link";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

async function getProducts() {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }
  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      {/* Optional: Navbar */}
      {/* <Navbar /> */}

      <div className="container mx-auto py-16 px-4 flex-grow">
        <h1 className="text-5xl font-extrabold mb-12 text-center text-gray-900">
          Our Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col"
            >
              {/* Image Placeholder */}
              <div className="bg-gray-100 h-56 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col">
                <h2 className="text-2xl font-semibold mb-2 text-gray-900">
                  {product.name}
                </h2>
                <p className="text-gray-600 mb-4 flex-1">{product.description}</p>
                <p className="text-xl font-bold text-blue-600 mb-4">
                  ${product.price}
                </p>

                <Link
                  href={`/products/${product._id}`}
                  className="mt-auto text-center bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 font-semibold transition duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional: Footer */}
      {/* <Footer /> */}
    </div>
  );
}
