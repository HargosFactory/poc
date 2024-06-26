import { z } from 'zod';

export const postTimeSheet = z.object({
  start: z.string(),
  end: z.string(),
});
