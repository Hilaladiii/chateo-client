import { z } from "zod";

export const registerSchema = z.object({
  username: z.string().min(1, "Username required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Required minimal 8 characters"),
});

export type TRegister = z.infer<typeof registerSchema>;
