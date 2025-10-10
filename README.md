# The South East Fencer - Website Replatform

**Status:** Staging / Preview Build
**Domain (Production):** thesoutheastfencer.com.au
**Source:** Duplicated from Mornington Peninsula Roofing codebase

## 📋 Project Overview

This is a static HTML website for The South East Fencer, a professional fencing company servicing Mornington Peninsula and South-East Melbourne. The site has been replatformed from WordPress to a static site architecture, using the proven structure from Mornington Peninsula Roofing as the foundation.

## 🎯 Key Information

### Contact Details
- **Phone:** 03 4152 7766
- **Email:** info@thesoutheastfencer.com.au
- **Service Area:** Mornington Peninsula & South-East Melbourne
- **Years in Business:** 25+

### Services Offered
1. Fence Repairs
2. New Fence Installation
3. Colorbond Fencing
4. Timber Fencing
5. Pool Fencing
6. Gates & Automation
7. Emergency Fence Repairs

### Primary Service Locations
- Mornington
- Mount Eliza
- Frankston
- Sorrento
- Rosebud
- Dromana

## 🏗️ Project Structure

```
/the-south-east-fencer/
├── index.html                 # Homepage
├── about.html                 # About page
├── contact.html               # Contact page
├── site.config.js            # Central configuration file
├── robots.txt                # Staging: noindex (update for production)
├── sitemap.xml               # Needs regeneration
├── /services/                # Service pages
│   ├── fence-repairs.html
│   ├── colorbond-fencing.html
│   ├── timber-fencing.html
│   ├── pool-fencing.html
│   ├── new-fences.html
│   ├── gates.html
│   └── emergency-fence-repairs.html
├── /service-areas/           # Location-based service pages
│   ├── index.html           # Service areas hub
│   └── /mornington/         # Mornington location pages
│       ├── index.html
│       ├── colorbond-fencing-mornington.html
│       ├── fence-repairs-mornington.html
│       ├── timber-fencing-mornington.html
│       ├── pool-fencing-mornington.html
│       ├── new-fences-mornington.html
│       ├── gates-mornington.html
│       └── emergency-fence-repairs-mornington.html
├── /locations/              # Legacy location pages (to be migrated)
├── /blog/                   # Blog posts
├── /assets/                 # CSS, JS, images
│   ├── /css/
│   ├── /js/
│   ├── /fonts/
│   └── /img/
└── /img/                    # Main images directory
```

## ✅ Completed Tasks

- [x] Created `site.config.js` with SEF branding and contact details
- [x] Updated `robots.txt` with noindex for staging
- [x] Global find-and-replace: MPR → SEF branding
- [x] Renamed service files (roof → fence)
- [x] Updated CSS class names (`mpr-` → `sef-`)
- [x] Updated JavaScript references
- [x] Updated `package.json` with new project name
- [x] Created sample Colorbond Fencing service page
- [x] Created sample Mornington service-in-location page
- [x] Established service-areas folder structure

## 🚧 TODO Before Production Launch

### Critical (Must Complete)

#### 1. Content & Branding
- [ ] **Review all HTML files** for fencing-appropriate content
  - Some pages still reference "roof" concepts that need fence equivalents
  - Update service descriptions to match fencing industry
- [ ] **Create/replace hero images** in `/img/` directory
  - Replace roof images with professional fencing photos
  - Compress to <200KB (webp/jpg)
  - Suggested images: Colorbond fence install, timber fence, pool fence
- [ ] **Update logo files**
  - Create SEF logo (SVG + PNG fallback)
  - Place in `/img/brands/` or `/assets/img/`
  - Update header references (currently shows "SEF" text)
- [ ] **Update favicon** and app icons in `/img/` root

#### 2. Services Pages
- [ ] Create complete service pages for:
  - [ ] Timber Fencing (`/services/timber-fencing.html`)
  - [ ] Pool Fencing (`/services/pool-fencing.html`)
  - [ ] New Fence Installation (`/services/new-fences.html`)
  - [ ] Gates & Automation (`/services/gates.html`)
- [ ] Review and update existing converted pages:
  - [ ] Fence Repairs (`fence-repairs.html`)
  - [ ] Fence Restoration (`fence-restoration.html`)
  - [ ] Re-Fencing (`re-fencing.html`)
  - [ ] Fence Painting (`fence-painting.html`)
  - [ ] Fence Cleaning (`fence-cleaning.html`)
  - [ ] Emergency Fence Repairs (`emergency-fence-repairs.html`)

#### 3. Service-in-Location Pages (Silo Strategy)
**Mornington** (7 pages):
- [ ] `/service-areas/mornington/fence-repairs-mornington.html`
- [ ] `/service-areas/mornington/colorbond-fencing-mornington.html` ✅ Created
- [ ] `/service-areas/mornington/timber-fencing-mornington.html`
- [ ] `/service-areas/mornington/pool-fencing-mornington.html`
- [ ] `/service-areas/mornington/new-fences-mornington.html`
- [ ] `/service-areas/mornington/gates-mornington.html`
- [ ] `/service-areas/mornington/emergency-fence-repairs-mornington.html`

**Additional Locations** (duplicate pattern for each):
- [ ] Mount Eliza (7 pages)
- [ ] Frankston (7 pages)
- [ ] Sorrento (7 pages)
- [ ] Rosebud (7 pages)
- [ ] Dromana (7 pages)

#### 4. Forms & Integration
- [ ] **Update Formspree endpoint** in all forms
  - Current placeholder: `https://formspree.io/f/mjkebvdz` (MPR endpoint)
  - Create new Formspree project for SEF
  - Update in `site.config.js` and all HTML form actions
  - Test form submissions
- [ ] **Update Google Analytics** tracking ID
  - Current: `G-QFTWK45LJZ` (MPR tracking)
  - Create new GA4 property for SEF
  - Replace in all HTML files (search for `gtag`)

#### 5. SEO & Indexing
- [ ] **Update meta descriptions** across all pages
  - Ensure fencing-specific keywords
  - Include location modifiers (Mornington Peninsula, South-East Melbourne)
- [ ] **Regenerate sitemap.xml**
  - Include all new service-areas pages
  - Update domain references to `thesoutheastfencer.com.au`
- [ ] **Review and update schema markup** on all pages
  - LocalBusiness schema (index.html, contact.html)
  - FAQPage schema (service pages)
  - Service schema (service pages)
  - Breadcrumb schema (service-areas pages)
- [ ] **Create 301 redirect map** from old WordPress URLs
  - Document old WP URL structure
  - Map to new static site URLs
  - Implement via Vercel redirects or `.htaccess`

#### 6. Staging → Production Transition
- [ ] **Remove noindex** from all pages
  - Delete `<meta name="robots" content="noindex,nofollow">` tags
  - Update `robots.txt` to allow crawling
- [ ] **Update canonical URLs** to production domain
- [ ] **DNS Configuration**
  - Point `thesoutheastfencer.com.au` to Vercel
  - Configure `www` subdomain redirect
  - Set up SSL certificate (Vercel auto)

## 🚀 Deployment Instructions

### Development Server
```bash
cd ~/the-south-east-fencer
npm run dev
# Opens on http://localhost:8000
```

### Deploy to Vercel

#### First-Time Setup
```bash
cd ~/the-south-east-fencer

# Install Vercel CLI (if not already installed)
npm i -g vercel

# Login to Vercel
vercel login

# Initialize project (creates .vercel directory)
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? [Your Vercel account]
# - Link to existing project? No
# - Project name: the-south-east-fencer
# - Directory: ./
# - Override settings? No
```

#### Deploy to Preview (Staging)
```bash
vercel
# Generates a preview URL like: https://the-south-east-fencer-xxxxx.vercel.app
```

#### Deploy to Production
```bash
# Only after completing all TODO items above!
vercel --prod
```

### Vercel Configuration

The `vercel.json` file controls deployment settings:

```json
{
  "cleanUrls": true,
  "trailingSlash": false,
  "redirects": [
    {
      "source": "/service-areas/mornington",
      "destination": "/service-areas/mornington/",
      "permanent": true
    }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        }
      ]
    }
  ]
}
```

## 📦 WordPress to Static Migration Notes

### Content Migration Strategy

1. **Homepage** (`/`)
   - Main heading: "The Timber Fencing Specialists"
   - Tagline: "Professional fencing solutions for 25+ years"
   - Services: Installation, Repair, Decking, Retaining Walls, Privacy Screens
   - Locations: Chelsea, Rosebud, Flinders, Mornington

2. **Service Pages**
   - WordPress doesn't have detailed service pages (404s found)
   - Create new fencing-specific content based on industry best practices
   - Include: benefits, process, FAQ, local SEO elements

3. **Blog** (if WordPress has blog posts)
   - Manually migrate any valuable blog content
   - Preserve URLs where possible or create 301 redirects

### URL Mapping Example

| Old WordPress URL | New Static URL |
|------------------|----------------|
| `/` | `/` |
| `/about/` | `/about.html` |
| `/contact/` | `/contact.html` |
| `/services/` | `/services/fence-repairs.html` (or services hub) |
| *(location pages - if exist)* | `/service-areas/[location]/` |

## 🎨 Theme & Design

### Color Palette
- Primary Dark: `#0e2233`
- Secondary: `#2a4a5e`
- Text: `#314656`
- Muted: `#64748b`
- Border: `#e7ecef`
- Background: `#f8f9fa`

### Fonts
- Brand: Peace Sans (custom TTF)
- Body: Roboto, system fonts
- Headings: Roboto (700, 800 weight)

### Key Design Elements
- Sticky header with phone CTA
- Hero sections with integrated quote forms
- Card-based service grids
- Colorbond colour swatches
- Before/after sliders (if fencing photos available)
- FAQ accordions with schema markup

## 📊 Performance Targets

- **Lighthouse Score:** 90+ across all metrics
- **LCP (Largest Contentful Paint):** <2.5s
- **First Input Delay:** <100ms
- **Cumulative Layout Shift:** <0.1
- **Image Optimization:** All images <200KB, webp/jpg format
- **Mobile Responsive:** All pages tested on mobile breakpoints

## 🔍 SEO Strategy

### On-Page SEO Checklist (Per Page)
- [ ] Unique H1 with location + service keywords
- [ ] Meta title <60 chars with brand + location
- [ ] Meta description <160 chars with CTA
- [ ] Canonical URL correctly set
- [ ] Schema markup (Service, LocalBusiness, FAQPage)
- [ ] Breadcrumb navigation
- [ ] Internal links to related services/locations
- [ ] Alt text on all images
- [ ] Mobile-friendly (responsive design)

### Content Silos
```
Service-Areas Hub
├── Mornington
│   ├── Fence Repairs Mornington
│   ├── Colorbond Fencing Mornington
│   ├── Timber Fencing Mornington
│   ├── Pool Fencing Mornington
│   ├── New Fences Mornington
│   ├── Gates Mornington
│   └── Emergency Repairs Mornington
├── Mount Eliza
│   └── (7 service pages)
└── [Additional locations...]
```

### Target Keywords (Examples)
- `fencing mornington`
- `colorbond fencing mornington peninsula`
- `fence repairs frankston`
- `pool fencing south east melbourne`
- `timber fencing mount eliza`

## 🛠️ Technical Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern responsive design, CSS Grid & Flexbox
- **Vanilla JavaScript** - No frameworks, minimal dependencies
- **Formspree** - Form handling
- **Vercel** - Hosting & deployment
- **Sharp** - Image optimization (npm package)

## 📞 Support & Contact

For questions about this codebase or deployment:
- **Developer:** [Your Name/Agency]
- **Client:** The South East Fencer
- **Client Phone:** 03 4152 7766
- **Client Email:** info@thesoutheastfencer.com.au

## 📄 License

Private repository. All rights reserved by The South East Fencer.

---

## Quick Start Checklist

Before going live, complete these items:

1. ✅ Content review (all pages)
2. ✅ Images uploaded and optimized
3. ✅ Forms tested with real email
4. ✅ Google Analytics configured
5. ✅ Remove all `noindex` tags
6. ✅ Update `robots.txt` to allow indexing
7. ✅ Generate and submit `sitemap.xml` to Google Search Console
8. ✅ Set up 301 redirects from old WordPress URLs
9. ✅ DNS pointed to Vercel
10. ✅ SSL certificate active
11. ✅ Test all links (use screaming frog or similar)
12. ✅ Mobile testing (all pages)
13. ✅ Cross-browser testing (Chrome, Safari, Firefox)
14. ✅ Lighthouse audit passes (90+ score)

**Last Updated:** October 10, 2025
