import { z } from "zod";

export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  product_description: z.string().optional(),
  animal_decription: z.string().optional(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  images: z.array(z.string()).optional(),
});

export type Product = z.infer<typeof productSchema>;
