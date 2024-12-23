import { z } from "zod";

export const verificationSchema = z.object({
  email: z.string().email(),
  code: z.number(),
});

export type TVerification = z.infer<typeof verificationSchema>;
