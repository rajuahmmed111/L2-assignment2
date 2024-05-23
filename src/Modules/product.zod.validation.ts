import { z } from 'zod';

const variantZodSchema = z.object({
  type: z
    .string()
    .min(1, 'Type is required')
    .max(100, "Type can't be longer than 100 characters"),
  value: z
    .string()
    .min(1, 'Value is required')
    .max(100, "Value can't be longer than 100 characters"),
});

const inventoryZodSchema = z.object({
  quantity: z
    .number()
    .int()
    .min(0, 'Quantity must be at least 0')
    .max(10000, "Quantity can't be more than 10000"),
  inStock: z.boolean(),
});

// Define Zod schema for TProduct
export const productZodSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(255, "Name can't be longer than 255 characters"),
  description: z
    .string()
    .min(1, 'Description is required')
    .max(1000, "Description can't be longer than 1000 characters"),
  price: z
    .number()
    .positive('Price must be a positive number')
    .max(1000000, "Price can't be more than 1000000"),
  category: z
    .string()
    .min(1, 'Category is required')
    .max(255, "Category can't be longer than 255 characters"),
  tags: z
    .array(z.string().min(1, 'Tags must be non-empty'))
    .min(1, 'At least one tag is required'),
  variants: z
    .array(variantZodSchema)
    .min(1, 'At least one variant is required'),
  inventory: inventoryZodSchema,
  isDeleted: z.boolean().default(false),
});
