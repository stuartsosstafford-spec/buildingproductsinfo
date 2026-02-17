export interface Category {
  slug: string;
  label: string;
  icon: string;
  description: string;
}

export const categories: Category[] = [
  {
    slug: 'tools',
    label: 'Tools',
    icon: '🔧',
    description: 'Hand tools, power tools, and accessories for trade professionals.',
  },
  {
    slug: 'plumbing-heating',
    label: 'Plumbing & Heating',
    icon: '🔩',
    description: 'Pipes, fittings, boilers, radiators, and heating components.',
  },
  {
    slug: 'electrical-lighting',
    label: 'Electrical & Lighting',
    icon: '💡',
    description: 'Wiring, switches, sockets, lighting fixtures, and electrical accessories.',
  },
  {
    slug: 'building-materials',
    label: 'Building Materials',
    icon: '🧱',
    description: 'Bricks, blocks, timber, cement, aggregates, and structural materials.',
  },
  {
    slug: 'fixings-adhesives',
    label: 'Fixings & Adhesives',
    icon: '🔗',
    description: 'Screws, bolts, anchors, sealants, adhesives, and tapes.',
  },
  {
    slug: 'site-equipment-ppe',
    label: 'Site Equipment & PPE',
    icon: '🦺',
    description: 'Safety gear, site equipment, ladders, scaffolding, and PPE.',
  },
  {
    slug: 'landscaping-outdoors',
    label: 'Landscaping & Outdoors',
    icon: '🌿',
    description: 'Fencing, paving, decking, drainage, and outdoor products.',
  },
  {
    slug: 'interiors-kitchens-bathrooms',
    label: 'Interiors, Kitchens & Bathrooms',
    icon: '🚿',
    description: 'Kitchen units, bathroom suites, tiling, flooring, and interior fittings.',
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getCategoryLabel(slug: string): string {
  return getCategoryBySlug(slug)?.label ?? slug;
}
