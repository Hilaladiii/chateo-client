import { z } from "zod";

export const createConversationSchema = z.object({
  userId: z.string().optional(),
  isGroup: z.boolean().optional(),
  members: z
    .object({
      id: z.string(),
    })
    .array()
    .optional(),
  name: z.string().optional(),
});

export type TCreateConversation = z.infer<typeof createConversationSchema>;
