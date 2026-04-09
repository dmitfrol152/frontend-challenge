import z from 'zod';

export const CatsSchema = z.object({
  id: z.string(),
  url: z.string(),
  width: z.number(),
  height: z.number(),
});

export type CatsProps = z.infer<typeof CatsSchema>;

export const CatsFavoritesStoreSchema = z.object({
  favorites: z.array(CatsSchema),
  toggleFavorite: z.function({
    input: [CatsSchema],
    output: z.void(),
  }),
});

export type CatsFavoritesStoreProps = z.infer<typeof CatsFavoritesStoreSchema>;
