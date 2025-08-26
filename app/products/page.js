// app/products/page.js
import Link from 'next/link';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';

async function getProducts() {
    const res = await fetch(`${process.env.NEXTAUTH_URL}/api/products`, {
        cache: 'no-store',
    });
    if (!res.ok) {
        throw new Error("Failed to fetch products");
    }
    return res.json();
}

export default async function ProductsPage() {
    const products = await getProducts();
    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
            <div className="container mx-auto py-12 px-4 flex-grow">
                <h1 className="text-4xl font-bold mb-8 text-center">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <div key={product._id} className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-2">{product.name}</h2>
                            <p className="text-gray-600 mb-4">{product.description}</p>
                            <p className="text-xl font-bold mb-4">${product.price}</p>
                            <Link href={`/products/${product._id}`} className="block text-center bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
                                View Details
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}