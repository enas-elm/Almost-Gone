import { BadRequestError } from "@/errors/badRequestError";
import { HttpError } from "@/errors/httpError";
import { NotFoundError } from "@/errors/notFoundError";
import { ProductService } from "@/services/productService";
import { NextResponse } from "next/server";

const productService = new ProductService();

export async function GET(
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;

  try {
    if (!productId) {
      throw new BadRequestError("Missing product ID");
    }

    const product = await productService.getProductById(productId);
    return NextResponse.json(product, { status: 200 });
  } catch (error) {
    if (error instanceof HttpError) {
      switch (true) {
        case error instanceof BadRequestError:
          return NextResponse.json({ error: error.message, status: 400 });
        case error instanceof NotFoundError:
          return NextResponse.json({ error: error.message, status: 404 });
        default:
          return NextResponse.json({ error: "Unknown error", status: 500 });
      }
    }

    console.error(error);
    return NextResponse.json({ error: "Internal Server Error", status: 500 });
  }
}
