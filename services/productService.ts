import { NotFoundError } from "@/errors/notFoundError";
import { Product, productSchema } from "@/models/productSchema";
import { createClient } from "@/utils/supabase/server";
import { UUID } from "crypto";

export interface IProductService {
  getProductById(id: UUID): Promise<Product>;
  getProducts(): Promise<Product[]>;
}

export class ProductService implements IProductService {
  async getProductById(id: UUID): Promise<Product> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }
    if (!data) {
      throw new NotFoundError(`Product with id ${id} not found`);
    }

    // Validation Zod avec `safeParse`
    const parsed = productSchema.safeParse(data);
    if (!parsed.success) {
      console.error("Invalid product data:", parsed.error);
      throw new Error("Invalid product data received from Supabase");
    }

    return parsed.data;
  }

  async getProducts(): Promise<Product[]> {
    const supabase = await createClient();
    const { data, error } = await supabase.from("products").select("*");

    if (error) {
      throw new Error(`Database error: ${error.message}`);
    }
    if (!data) return [];

    return data.flatMap((product) => {
      const parsed = productSchema.safeParse(product);
      if (!parsed.success) {
        console.error("Invalid product data:", parsed.error);
        return []; // Exclut l'entrée invalide sans ajouter `undefined`
      }
      return [parsed.data]; // Retourne un tableau contenant le produit validé
    });
  }
}
