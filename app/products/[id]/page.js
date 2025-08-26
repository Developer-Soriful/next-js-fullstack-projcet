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
    const { id } = await params; // <--- The change is here
    const product = await getProduct(id);

    if (!product) {
        notFound();
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800">
            <div className="container mx-auto py-12 px-4 flex-grow">
                <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
                    <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                    <p className="text-gray-700 text-lg mb-6">{product.description}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-4">
                        ${product.price}
                    </p>
                    <p className="text-gray-500">Product ID: {product._id.toString()}</p>
                </div>
            </div>
        </div>
    );
}