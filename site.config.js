/**
 * Site Configuration for The South East Fencer
 * Central configuration for all branding, contact details, and site metadata
 */

module.exports = {
  // Brand Identity
  brand: "The South East Fencer",
  brandShort: "SEF",
  tagline: "Expert Fencing Solutions Across Mornington Peninsula & South-East Melbourne",

  // Contact Information
  // TODO: Verify final phone number before production launch
  phone: "03 4152 7766",
  phoneFormatted: "(03) 4152 7766",
  phoneHref: "tel:0341527766",

  email: "info@thesoutheastfencer.com.au",
  emailHref: "mailto:info@thesoutheastfencer.com.au",

  // Domain & URLs
  domain: "thesoutheastfencer.com.au",
  url: "https://thesoutheastfencer.com.au",

  // Service Area
  serviceArea: "Mornington Peninsula & South-East Melbourne",
  serviceAreaShort: "Mornington Peninsula",

  // Business Details
  abn: "XX XXX XXX XXX", // TODO: Add actual ABN
  tradingHours: {
    weekdays: "7:00 AM - 5:00 PM",
    saturday: "8:00 AM - 2:00 PM",
    sunday: "Closed"
  },

  // Social Media (TODO: Add actual social media URLs)
  social: {
    facebook: "",
    instagram: "",
    google: ""
  },

  // SEO Defaults
  seo: {
    defaultTitle: "The South East Fencer | Professional Fencing Services",
    titleTemplate: "%s | The South East Fencer",
    defaultDescription: "Professional fencing services across Mornington Peninsula and South-East Melbourne. Specialising in Colorbond, timber, pool fencing, repairs, and new installations. Licensed and insured.",
    keywords: "fencing, fence repairs, colorbond fencing, timber fencing, pool fencing, Mornington Peninsula, South East Melbourne"
  },

  // Services List
  services: [
    {
      name: "Fence Repairs",
      slug: "fence-repairs",
      icon: "wrench"
    },
    {
      name: "New Fence Installation",
      slug: "new-fences",
      icon: "hammer"
    },
    {
      name: "Colorbond Fencing",
      slug: "colorbond-fencing",
      icon: "shield"
    },
    {
      name: "Timber Fencing",
      slug: "timber-fencing",
      icon: "tree"
    },
    {
      name: "Pool Fencing",
      slug: "pool-fencing",
      icon: "pool"
    },
    {
      name: "Gates & Automation",
      slug: "gates",
      icon: "gate"
    },
    {
      name: "Emergency Fence Repairs",
      slug: "emergency-fence-repairs",
      icon: "alert"
    }
  ],

  // Primary Service Locations
  locations: [
    { name: "Mornington", slug: "mornington" },
    { name: "Mount Eliza", slug: "mount-eliza" },
    { name: "Frankston", slug: "frankston" },
    { name: "Sorrento", slug: "sorrento" },
    { name: "Rosebud", slug: "rosebud" },
    { name: "Dromana", slug: "dromana" }
  ],

  // Forms
  forms: {
    // TODO: Replace with actual Formspree endpoint or custom handler before launch
    endpoint: "https://formspree.io/f/YOUR_FORM_ID",
    serviceTypes: [
      "Fence Repairs",
      "New Fence Installation",
      "Colorbond Fencing",
      "Timber Fencing",
      "Pool Fencing",
      "Gates & Automation",
      "Emergency Repair",
      "Free Quote"
    ]
  },

  // Staging/Production Flags
  environment: process.env.NODE_ENV || "development",
  isProduction: process.env.NODE_ENV === "production",

  // Robot indexing - noindex for staging
  allowIndexing: process.env.NODE_ENV === "production"
};
