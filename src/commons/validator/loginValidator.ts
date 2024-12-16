import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Required minimal 8 characters"),
});

export type TLogin = z.infer<typeof loginSchema>;
