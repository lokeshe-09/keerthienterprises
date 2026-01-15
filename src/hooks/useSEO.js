import { useEffect } from "react";

/**
 * Custom SEO hook for updating page metadata dynamically
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Meta description
 * @param {string} options.keywords - Meta keywords
 * @param {string} options.canonical - Canonical URL path
 * @param {string} options.ogImage - Open Graph image URL
 */
export default function useSEO({
  title,
  description,
  keywords,
  canonical,
  ogImage = "/assets/og-image.png",
}) {
  useEffect(() => {
    // Update document title
    const fullTitle = title
      ? `${title} | Keerthi Enterprises - Best Insurance Broking Company India`
      : "Keerthi Enterprises - Best Insurance Broking Company in India | Life, Health & Motor Insurance";
    document.title = fullTitle;

    // Update meta description
    if (description) {
      updateMetaTag("name", "description", description);
      updateMetaTag("property", "og:description", description);
      updateMetaTag("name", "twitter:description", description);
    }

    // Update meta keywords
    if (keywords) {
      updateMetaTag("name", "keywords", keywords);
    }

    // Update canonical URL
    if (canonical) {
      const canonicalUrl = `https://keerthienterprises.com${canonical}`;
      updateLinkTag("canonical", canonicalUrl);
      updateMetaTag("property", "og:url", canonicalUrl);
      updateMetaTag("name", "twitter:url", canonicalUrl);
    }

    // Update Open Graph title
    updateMetaTag("property", "og:title", fullTitle);
    updateMetaTag("name", "twitter:title", fullTitle);

    // Update Open Graph image
    if (ogImage) {
      const imageUrl = ogImage.startsWith("http")
        ? ogImage
        : `https://keerthienterprises.com${ogImage}`;
      updateMetaTag("property", "og:image", imageUrl);
      updateMetaTag("name", "twitter:image", imageUrl);
    }

    // Scroll to top on page change
    window.scrollTo(0, 0);
  }, [title, description, keywords, canonical, ogImage]);
}

// Helper function to update meta tags
function updateMetaTag(attribute, key, value) {
  let element = document.querySelector(`meta[${attribute}="${key}"]`);
  if (element) {
    element.setAttribute("content", value);
  } else {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    element.setAttribute("content", value);
    document.head.appendChild(element);
  }
}

// Helper function to update link tags
function updateLinkTag(rel, href) {
  let element = document.querySelector(`link[rel="${rel}"]`);
  if (element) {
    element.setAttribute("href", href);
  } else {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    element.setAttribute("href", href);
    document.head.appendChild(element);
  }
}
