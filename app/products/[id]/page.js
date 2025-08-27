import { notFound } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

async function getProduct(id) {
  try {
    const client = await clientPromise;
    const db = client.db("next-store");
    const product = await db
      .collection("products")
      .findOne({ _id: new ObjectId(id) });
    return product;
  } catch (e) {
    console.error(e);
    return null;
  }
}

export default async function ProductDetailsPage({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto py-16 px-4 flex-grow">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Product Image Placeholder */}
          <div className="bg-gray-100 h-64 flex items-center justify-center">
            <span className="text-gray-400 text-lg">Product Image</span>
          </div>

          {/* Product Details */}
          <div className="p-8 space-y-6">
            <h1 className="text-4xl font-extrabold text-gray-900">{product.name}</h1>
            <p className="text-gray-700 text-lg">{product.description}</p>
            <p className="text-3xl font-bold text-blue-600">${product.price}</p>
            <p className="text-gray-500 text-sm">Product ID: {product._id.toString()}</p>

            {/* Add to Cart / Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg shadow transition duration-300">
                Add to Cart
              </button>
              <button className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 rounded-lg shadow transition duration-300">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
