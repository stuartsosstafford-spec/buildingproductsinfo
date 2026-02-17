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
}

export function productSchema(input: ProductSchemaInput) {
  return {
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
