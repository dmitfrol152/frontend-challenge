import z from 'zod';
import { CatsSchema } from '../../model/types';
import type { ReactNode } from 'react';

export const CatCardSchema = z.object({
  cat: CatsSchema,
  toggleFavorites: z.function({
    input: [CatsSchema],
    output: z.custom<ReactNode>(),
  }),
});

export type CatCardProps = z.infer<typeof CatCardSchema>;
