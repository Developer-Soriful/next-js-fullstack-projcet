
import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-20">
          <div className="container mx-auto">
            <h1 className="text-5xl font-bold mb-4">Welcome to Our Store</h1>
            <p className="text-xl mb-8">Discover amazing products you'll love.</p>
            <Link href="/products" className="px-6 py-3 bg-white text-blue-500 rounded-full font-bold shadow-lg hover:bg-gray-100 transition duration-300">
              Explore Products
            </Link>
          </div>
        </section>

        {/* Product Highlights Section (optional) */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
              {/* Add some static product highlight cards here if you wish */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Product 1</h3>
                <p className="text-gray-600">Short description of a product.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Product 2</h3>
                <p className="text-gray-600">Short description of a product.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">Product 3</h3>
                <p className="text-gray-600">Short description of a product.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}