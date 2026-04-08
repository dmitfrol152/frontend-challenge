import { CatsSchema } from '@/entities/cats/model/types';
import z from 'zod';

export const CatsListSchema = z.object({
  data: z.array(z.array(CatsSchema)),
  hasNextPage: z.boolean(),
  isFetchingNextPage: z.boolean(),
  onFetchNextPage: z.function({
    input: [],
    output: z.void(),
  }),
});

export type CatsListProps = z.infer<typeof CatsListSchema>;
