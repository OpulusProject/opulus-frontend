import { z } from 'zod';

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  accountName: z.string(),
  date: z.string(),
  type: z.string(),
  merchantName: z.string(),
  merchantLogo: z.string().nullable(),
  amount: z.number(),
  currencyCode: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
