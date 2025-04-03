import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Mot de passe trop court"),
});

export const registerSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6, "Mot de passe trop court"),
    repeatPassword: z.string({
      required_error: "La confirmation du mot de passe ne peut pas être vide",
    }),
  })
  .superRefine(({ repeatPassword, password }, ctx) => {
    if (repeatPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Les mots de passe ne correspondent pas",
        path: ["repeatPassword"],
      });
    }
  });
