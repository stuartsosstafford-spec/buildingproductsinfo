export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function breadcrumbListSchema(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export interface ProductSchemaInput {
  name: string;
  description: string;
  image: string;
  brand: string;
  url: string;
  sku?: string;
  category?: string;
  price?: string;
  affiliateUrl?: string;
  dateModified?: string;
}

export function productSchema(input: ProductSchemaInput) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: input.name,
    description: input.description,
    image: input.image,
    brand: {
      '@type': 'Brand',
      name: input.brand,
    },
    url: input.url,
    ...(input.sku ? { sku: input.sku } : {}),
    ...(input.category ? { category: input.category } : {}),
    ...(input.dateModified ? { dateModified: input.dateModified } : {}),
  };

  // Offers block omitted — prices are affiliate/third-party and change
  // frequently, so including a price in schema would be inaccurate.

  return schema;
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Building Products Info',
    url: 'https://buildingproductsinfo.co.uk',
    description: 'Independent product information, specifications and buying guides for UK building and trade professionals.',
    publisher: {
      '@type': 'Organization',
      name: 'Building Products Info',
      url: 'https://buildingproductsinfo.co.uk',
      logo: {
        '@type': 'ImageObject',
        url: 'https://buildingproductsinfo.co.uk/favicon.svg',
      },
    },
  };
}

export interface ItemListItem {
  name: string;
  url: string;
}

export function itemListSchema(name: string, items: ItemListItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
    })),
  };
}

export interface FAQItem {
  question: string;
  answer: string;
}

export function faqSchema(items: FAQItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export interface ArticleSchemaInput {
  headline: string;
  description: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  author: string;
  url: string;
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.headline,
    description: input.description,
    ...(input.image ? { image: input.image } : {}),
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Person',
      name: input.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Building Products Info',
      url: 'https://buildingproductsinfo.co.uk',
    },
    mainEntityOfPage: input.url,
  };
}
