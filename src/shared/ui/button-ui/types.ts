import type { ReactNode } from 'react';
import z from 'zod';

export const ButtonUiSchema = z.object({
  type: z.enum(['button']),
  size: z.enum(['s', 'm']),
  variant: z.enum(['main']).optional(),
  onClick: z.function({
    input: [],
    output: z.void(),
  }),
  className: z.string().optional(),
  children: z.custom<ReactNode>().optional(),
});

export type ButtonUiProps = z.infer<typeof ButtonUiSchema>;
