import { z, defineCollection } from 'astro:content'

const MAIN_PAGE_COLLECTION = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    comments: z.boolean().default(true),
  }),
})

const POSTS_COLLECTION = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    lastMod: z.date().optional(),
    summary: z.string().optional(),
    cover: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).default([]),
    comments: z.boolean().default(true),
    draft: z.boolean().default(false),
    sticky: z.number().default(0),
  }),
})

const PROJECTS_COLLECTION = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string(),
    link: z.string().url(),
  }),
})

export const collections = {
  'main-page': MAIN_PAGE_COLLECTION,
  posts: POSTS_COLLECTION,
  projects: PROJECTS_COLLECTION,
}
