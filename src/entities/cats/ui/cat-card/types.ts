import z from 'zod';
import { CatsSchema } from '../../model/types';
import type { ComponentType } from 'react';

export const CatCardSchema = z.object({
  cat: CatsSchema,
  ToggleFavorites:
    z.custom<ComponentType<{ cat: z.infer<typeof CatsSchema> }>>(),
});

export type CatCardProps = z.infer<typeof CatCardSchema>;
