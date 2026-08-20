import { useEffect } from 'react';

const Seo = ({ 
  title = "Scaffold — Prompt Directory", 
  description = "Curated design, workflow, and image prompts for AI IDEs.", 
  canonical = "/", 
  ogType = "website", 
  ogImage = "/og/default.png", 
  structuredData = null 
}) => {
  const baseUrl = "https://scaffold.swarshinde.dev";
  const fullCanonicalUrl = canonical.startsWith('http') ? canonical : `${baseUrl}${canonical === '/' ? '' : canonical}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;

  useEffect(() => {
    // 1. Update document title
    document.title = title;

    // 2. Helper to set or create meta tags
    const setMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        
        if (selector.includes('name=')) {
          const match = selector.match(/name="([^"]+)"/);
          if (match) element.setAttribute('name', match[1]);
        } else if (selector.includes('property=')) {
          const match = selector.match(/property="([^"]+)"/);
          if (match) element.setAttribute('property', match[1]);
        }
        
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    const setLinkTag = (rel, href) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // 3. Update basic metadata
    setMetaTag('meta[name="description"]', 'content', description);
    setLinkTag('canonical', fullCanonicalUrl);

    // 4. Update Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:url"]', 'content', fullCanonicalUrl);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:image"]', 'content', fullOgImage);

    // 5. Update Twitter Card
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', fullOgImage);

    // 6. Manage Structured Data (JSON-LD)
    let scriptElement = null;
    if (structuredData) {
      // Find existing JSON-LD script if it exists and remove it to avoid duplicates
      // Note: We use a specific ID to track this component's JSON-LD
      const existingScript = document.getElementById('seo-structured-data');
      if (existingScript) {
        existingScript.remove();
      }

      scriptElement = document.createElement('script');
      scriptElement.id = 'seo-structured-data';
      scriptElement.setAttribute('type', 'application/ld+json');
      scriptElement.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptElement);
    }

    // Cleanup function
    return () => {
      if (scriptElement && document.head.contains(scriptElement)) {
        document.head.removeChild(scriptElement);
      }
    };
  }, [title, description, canonical, ogType, ogImage, structuredData, fullCanonicalUrl, fullOgImage]);

  return null;
};

export default Seo;
