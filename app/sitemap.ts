import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mivisualization.com'
  
  // URLs estáticas
  const staticUrls = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/privacidad`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date('2024-01-01'),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]
  
  // URLs dinámicas del blog
  const blogPosts = [
    { id: 1, date: '2024-01-15' },
    { id: 2, date: '2024-01-10' },
    { id: 3, date: '2024-01-05' },
  ]
  
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))
  
  return [...staticUrls, ...blogUrls]
}