import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://byro.ro/',
      lastModified: new Date(),
      changeFrequency: 'never',
      priority: 1,
    },
    {
      url: 'https://byro.ro/documente-necesare',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://byro.ro/documente-necesare/inmatriculare-autovehicul',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://byro.ro/documente-necesare/schimbare-buletin',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://byro.ro/documente-necesare/eliberare-buletin',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: 'https://byro.ro/contribuie',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: 'https://byro.ro/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ];
}
