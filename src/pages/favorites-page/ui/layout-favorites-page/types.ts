import { CatsSchema } from '@/entities/cats/model/types';
import z from 'zod';

export const LayoutFavoritesPageSchema = z.object({
  data: z.array(CatsSchema),
});

export type LayoutFavoritesPageProps = z.infer<
  typeof LayoutFavoritesPageSchema
>;
