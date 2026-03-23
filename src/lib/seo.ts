export interface SEOMeta {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
}

export function buildTitle(pageTitle: string): string {
  return `${pageTitle} | Building Products Info`;
}

export function buildCanonical(path: string): string {
  const base = 'https://buildingproductsinfo.co.uk';
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
