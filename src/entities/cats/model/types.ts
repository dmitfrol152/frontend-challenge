import z from 'zod';

export const CatsSchema = z.object({
  id: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

export type CatsProps = z.infer<typeof CatsSchema>;
