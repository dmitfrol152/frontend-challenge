import { CatsSchema } from '@/entities/cats/model/types';
import z from 'zod';

export const CatsListSchema = z.object({
  data: z.array(z.array(CatsSchema)),
  hasNextPage: z.boolean().optional(),
  isFetchingNextPage: z.boolean().optional(),
  onFetchNextPage: z
    .function({
      input: [],
      output: z.void(),
    })
    .optional(),
});

export type CatsListProps = z.infer<typeof CatsListSchema>;
