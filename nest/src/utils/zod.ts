import { ZodType } from 'zod';

// eslint-disable-next-line prettier/prettier
export type getZodOutput<zodType extends ZodType> = zodType extends ZodType<infer T> ? T : never;