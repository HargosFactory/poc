import { config as importEnvFile } from 'dotenv';
import { expand as expandEnv } from 'dotenv-expand';
import { z } from 'zod';

for (const pathEnv of ['.env.local', '.env']) {
  expandEnv(importEnvFile({ path: pathEnv }));
}

export const env = z
  .object({
    USERNAME_WORK_SHEET: z.string(),
    PASSWORD_WORK_SHEET: z.string(),
    URL_WORK_SHEET: z.string(),
  })
  .transform((input) => {
    const env = input as Record<string, string> | undefined;
    return {
      USERNAME_WORK_SHEET: env?.USERNAME_WORK_SHEET ?? '',
      PASSWORD_WORK_SHEET: env?.PASSWORD_WORK_SHEET ?? '',
      URL_WORK_SHEET: env?.URL_WORK_SHEET ?? '',
    };
  })
  .parse(process.env);
