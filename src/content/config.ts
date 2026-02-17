import { defineCollection, z } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum([
      'tools',
      'plumbing-heating',
      'electrical-lighting',
      'building-materials',
      'fixings-adhesives',
      'site-equipment-ppe',
      'landscaping-outdoors',
      'interiors-kitchens-bathrooms',
    ]),
    brand: z.string(),
    modelNumber: z.string().optional(),
    shortDescription: z.string(),
    featuredImage: z.string(),
    galleryImages: z.array(z.string()).optional(),
    keyFeatures: z.array(z.string()),
    specifications: z.array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    ),
    overview: z.string().optional(),
    whoItsFor: z.array(z.string()).optional(),
    prosAndCons: z
      .object({
        pros: z.array(z.string()),
        cons: z.array(z.string()),
      })
      .optional(),
    affiliateUrl: z.string().url().optional(),
    affiliateButtonText: z.string().default('Check Price'),
    price: z.string().optional(),
    addedDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
    featured: z.boolean().default(false),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    relatedProducts: z.array(z.string()).optional(),
    worksWellWith: z.array(z.string()).optional(),
    relatedGuides: z.array(z.string()).optional(),
  }),
});

const brands = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    description: z.string(),
    logo: z.string().optional(),
    website: z.string().url().optional(),
    established: z.number().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string().optional(),
    author: z.string().default('Editorial Team'),
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    featuredImage: z.string().optional(),
    metaTitle: z.string().optional(),
    metaDescription: z.string().optional(),
    draft: z.boolean().default(false),
    relatedProducts: z.array(z.string()).optional(),
  }),
});

export const collections = { products, brands, guides };
