import { Product } from "@/models/productSchema";
import { UUID } from "crypto";

export interface IProductService {
  getProductById(id: UUID): Promise<Product | null>;
  getProducts(): Promise<Product[]>;
}

export class ProductService implements IProductService {
  //   private apiUrl: string;

  //   constructor(apiUrl: string) {
  //     this.apiUrl = apiUrl;
  //   }

  async getProductByISBN(isbn: string): Promise<Product> {
    try {
      /** Replace by faker-js */
      //   const response = await fetch(`${this.apiUrl}/prodcuts/${id}`, {
      //     method: "GET",
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //   });
      //   if (!response.ok) {
      //     throw new Error(`Failed to fetch products: ${response.statusText}`);
      //   }
      //   const data = await response.json();

      return ProductSchema.parse({
        isbn,
        name: faker.commerce.productName(),
        price: (Math.random() * (700 - 100) + 100).toLocaleString(undefined, {
          style: "currency",
          currency: "eur",
          maximumFractionDigits: 2,
        }),
        description: faker.commerce.productDescription(),
      });
    } catch (error) {
      console.error("Error fetching products", error);
      throw error;
    }
  }

  async createProduct(product: Omit<Product, "isbn">): Promise<Product> {
    return { ...product, isbn: "0-2169-9494-2" };
  }

  async updateProduct(
    isbn: string,
    product: Omit<Product, "isbn">
  ): Promise<Product> {
    return { ...product, isbn };
  }

  async deleteProduct(isbn: string): Promise<boolean> {
    return !!isbn;
  }
}

// 📌 Définition des erreurs personnalisées avec `name`
export class HttpError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = this.constructor.name; // Définit le nom de l'erreur dynamiquement
  }
}

export class BadRequestError extends HttpError {
  constructor(message = "Bad Request") {
    super(400, message);
  }
}

export class NotFoundError extends HttpError {
  constructor(message = "Not Found") {
    super(404, message);
  }
}
