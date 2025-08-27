// app/page.js (HomePage)
import Link from "next/link";
import clientPromise from "@/lib/mongodb";

async function getHighlightedProducts() {
  const client = await clientPromise;
  const db = client.db("next-store");
  const highlights = await db
    .collection("products")
    .find({ featured: true })
    .sort({ createdAt: -1 })
    .limit(6)
    .toArray();

  return highlights;
}

export default async function HomePage() {
  const highlights = await getHighlightedProducts();

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-24">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-extrabold mb-4">Welcome to Our Store</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover amazing products handpicked just for you. Quality, style, and innovation all in one place.
            </p>
            <Link
              href="/products"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-xl hover:shadow-2xl hover:bg-gray-100 transition duration-300"
            >
              Explore Products
            </Link>
          </div>
        </section>

        {/* Product Highlights Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Featured Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {highlights.length > 0 ? (
                highlights.map((product) => (
                  <div
                    key={product._id}
                    className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col overflow-hidden"
                  >
                    {/* Image Placeholder */}
                    <div className="bg-gray-100 h-56 flex items-center justify-center">
                      <span className="text-gray-400">Product Image</span>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 flex-1">{product.description}</p>
                      <p className="text-xl font-bold text-blue-600 mt-4">
                        ${product.price}
                      </p>
                      <Link
                        href={`/products/${product._id}`}
                        className="mt-6 text-center bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 col-span-3 text-center">
                  No featured products yet.
                </p>
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
