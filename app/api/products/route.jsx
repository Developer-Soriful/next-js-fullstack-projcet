// app/api/products/route.js
import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db("next-store");
    const products = await db.collection("products").find({}).toArray();
    return NextResponse.json(products);
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to fetch products." },
      { status: 500 }
    );
  }
}

// app/api/products/route.js

// ... (rest of the code)

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db("next-store");
    const data = await request.json();
    const result = await db.collection("products").insertOne(data);
    return NextResponse.json(result, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Failed to add product." },
      { status: 500 }
    );
  }
}
