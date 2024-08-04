import { z } from 'zod';

export const SignupValidation = z.object({
  name: z.string().min(2, { message: 'Too short' }),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 chars.' })
    .max(50),
});

export const SigninValidation = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: 'Password must be at least 8 chars.' })
    .max(50),
});

export const OfferValidation = z.object({
  title: z.string().min(5).max(2200),
  subtitle: z.string().min(0).max(2200),
  description: z.string().min(5).max(2200),
  duration: z.coerce.number().min(0).max(999),
  price: z.coerce.number().min(0).max(999),
  imageMap: z
    .array(z.custom<File>(), z.custom<File[]>())
    .min(1, { message: 'At least one file is required' }),
});

export const ProfileValidation = z.object({
  name: z.string().min(2, { message: 'Too short' }),
  email: z.string().email(),
  bio: z.string().max(200),
  file: z.custom<File[]>(),
});
