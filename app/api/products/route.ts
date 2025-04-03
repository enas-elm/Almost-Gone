import { ProductService } from "@/services/productService";
import { NextResponse } from "next/server";

const productService = new ProductService();

export async function GET() {
  try {
    const products = await productService.getProducts();
    return NextResponse.json(products);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
