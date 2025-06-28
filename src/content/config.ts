import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.string(),
    author: z.object({
      name: z.string(),
      title: z.string(),
      image: z.string(),
    }),
  }),
});

const positions = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    remote: z.boolean(),
    type: z.string(),
  }),
});

export const collections = { blog, positions };
