// Utilidades para manejo de SEO sin dependencias externas
export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  canonical?: string;
}

export const updatePageSEO = (seoData: SEOData) => {
  // Actualizar título
  document.title = seoData.title;

  // Actualizar meta description
  updateMetaTag('name', 'description', seoData.description);

  // Actualizar keywords si se proporcionan
  if (seoData.keywords) {
    updateMetaTag('name', 'keywords', seoData.keywords);
  }

  // Actualizar Open Graph tags
  updateMetaTag('property', 'og:title', seoData.title);
  updateMetaTag('property', 'og:description', seoData.description);
  
  if (seoData.ogImage) {
    updateMetaTag('property', 'og:image', seoData.ogImage);
  }

  // Actualizar Twitter Card tags
  updateMetaTag('name', 'twitter:title', seoData.title);
  updateMetaTag('name', 'twitter:description', seoData.description);
  
  if (seoData.ogImage) {
    updateMetaTag('name', 'twitter:image', seoData.ogImage);
  }

  // Actualizar canonical URL si se proporciona
  if (seoData.canonical) {
    updateCanonicalLink(seoData.canonical);
  }
};

const updateMetaTag = (attribute: string, name: string, content: string) => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateCanonicalLink = (href: string) => {
  let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (element) {
    element.href = href;
  } else {
    element = document.createElement('link');
    element.rel = 'canonical';
    element.href = href;
    document.head.appendChild(element);
  }
};

// Hook personalizado para SEO
export const useSEO = (seoData: SEOData) => {
  React.useEffect(() => {
    updatePageSEO(seoData);
  }, [seoData]);
};

// Importar React para el hook
import React from 'react';