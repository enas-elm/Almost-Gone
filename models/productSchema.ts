import { z } from "zod";

export const productSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(1),
  product_description: z.string(),
  animal_decription: z.string(),
  price: z.number().nonnegative(),
  stock: z.number().int().nonnegative(),
  images: z.array(z.string()),
});

export type Product = z.infer<typeof productSchema>;
