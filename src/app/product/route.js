import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const body = await req.json();
  const productsCollection = dbConnect("products");
  const result = await productsCollection.insertOne(body);
  revalidatePath("/products");
  return NextResponse.json(result);
};
export const GET = async (req) => {
  const productsCollection = dbConnect("products");
  const products = await productsCollection.find({}).toArray();
  return NextResponse.json(products);
};
