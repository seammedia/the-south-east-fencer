# Production Launch Checklist
## The South East Fencer Website

**Staging URL:** https://the-south-east-fencer-g4q17o86e-seammedias-projects.vercel.app
**Target Domain:** thesoutheastfencer.com.au

Use this checklist to track progress toward production launch. Check off items as completed.

---

## Phase 1: Content & Design (Estimated: 2-3 days)

### Images & Media
- [ ] Source professional fencing photos (minimum 10 high-quality images)
  - [ ] Colorbond fence installation (hero)
  - [ ] Timber fencing examples
  - [ ] Pool fencing compliance examples
  - [ ] Gates and automation
  - [ ] Before/after transformation (2-3 examples)
  - [ ] Team photos (optional)
- [ ] Optimize all images (<200KB each, webp/jpg format)
- [ ] Upload images to `/img/` directory
- [ ] Update image references in HTML files
- [ ] Create SEF logo (SVG + PNG fallback)
- [ ] Update favicon and app icons

### Logo & Branding
- [ ] Design/upload SEF logo to `/img/brands/sef-logo.svg`
- [ ] Create PNG fallback version
- [ ] Update header logo in all pages (replace "SEF" text)
- [ ] Test logo display on mobile and desktop

### Content Review
- [ ] Read through EVERY page looking for roofing terminology
- [ ] Search for and replace remaining instances of:
  - [ ] "roof" / "roofing" / "roofer"
  - [ ] "gutter" / "flashing" / "valley"
  - [ ] "tile" / "tiling" (unless referring to pool fencing tiles)
  - [ ] "re-bedding" / "re-pointing" (roofing-specific)
- [ ] Update About page with fencing company history
- [ ] Update Contact page with correct business details
- [ ] Verify phone number (03 4152 7766) appears on all pages
- [ ] Verify email (info@thesoutheastfencer.com.au) appears correctly

---

## Phase 2: Service Pages (Estimated: 1-2 days)

### Create Missing Service Pages
Use `/services/colorbond-fencing.html` as template for each.

- [ ] `/services/timber-fencing.html`
  - [ ] Write content (benefits, process, FAQ)
  - [ ] Add schema markup
  - [ ] Upload relevant image
- [ ] `/services/pool-fencing.html`
  - [ ] Emphasize compliance and safety
  - [ ] Include regulations info
  - [ ] Add schema markup
- [ ] `/services/new-fences.html` (New Fence Installation)
  - [ ] Cover installation process
  - [ ] Material options
  - [ ] Add schema markup
- [ ] `/services/gates.html` (Gates & Automation)
  - [ ] Manual and automatic options
  - [ ] Security features
  - [ ] Add schema markup
- [ ] `/services/index.html` (Services Hub)
  - [ ] Grid of all 7 services
  - [ ] Brief description of each
  - [ ] Link to individual service pages

### Update Existing Service Pages
Review and enhance converted pages:
- [ ] `/services/fence-repairs.html` - Review and update content
- [ ] `/services/fence-restoration.html` - Review and update content
- [ ] `/services/re-fencing.html` - Review and update content
- [ ] `/services/fence-painting.html` - Review and update content
- [ ] `/services/fence-cleaning.html` - Review and update content
- [ ] `/services/emergency-fence-repairs.html` - Review and update content

---

## Phase 3: Service-Area Pages (Estimated: 2-3 days)

### Mornington (Priority 1)
Use `/service-areas/mornington/colorbond-fencing-mornington.html` as template.

- [ ] `/service-areas/mornington/fence-repairs-mornington.html`
- [ ] `/service-areas/mornington/timber-fencing-mornington.html`
- [ ] `/service-areas/mornington/pool-fencing-mornington.html`
- [ ] `/service-areas/mornington/new-fences-mornington.html`
- [ ] `/service-areas/mornington/gates-mornington.html`
- [ ] `/service-areas/mornington/emergency-fence-repairs-mornington.html`

### Mount Eliza
- [ ] Create `/service-areas/mount-eliza/` directory
- [ ] Create all 7 service pages for Mount Eliza
- [ ] Update location-specific content

### Frankston
- [ ] Create `/service-areas/frankston/` directory
- [ ] Create all 7 service pages for Frankston
- [ ] Update location-specific content

### Sorrento
- [ ] Create `/service-areas/sorrento/` directory
- [ ] Create all 7 service pages for Sorrento
- [ ] Update location-specific content

### Rosebud
- [ ] Create `/service-areas/rosebud/` directory
- [ ] Create all 7 service pages for Rosebud
- [ ] Update location-specific content

### Dromana
- [ ] Create `/service-areas/dromana/` directory
- [ ] Create all 7 service pages for Dromana
- [ ] Update location-specific content

### Service-Areas Hub
- [ ] Create `/service-areas/index.html` with all locations
- [ ] Add map or location selector
- [ ] Link to all location pages

---

## Phase 4: Forms & Integrations (Estimated: 1 day)

### Formspree Setup
- [ ] Create new Formspree account (if needed) at https://formspree.io
- [ ] Create new form project for "The South East Fencer"
- [ ] Get new form endpoint ID
- [ ] Update `site.config.js` with new form endpoint
- [ ] Find and replace `mjkebvdz` with new form ID in all HTML files
- [ ] Test form submission on at least 3 pages
- [ ] Verify email notifications arrive correctly
- [ ] Set up autoresponder (optional)

### Google Analytics
- [ ] Create new GA4 property at https://analytics.google.com
- [ ] Name property: "The South East Fencer"
- [ ] Set timezone to Australia/Melbourne
- [ ] Get new measurement ID (G-XXXXXXXXXX)
- [ ] Find and replace `G-QFTWK45LJZ` with new ID in all HTML files
- [ ] Test tracking with GA Debugger or Real-Time reports
- [ ] Set up conversion goals (form submissions, phone clicks)

### Google Search Console
- [ ] Add property for thesoutheastfencer.com.au
- [ ] Verify ownership (DNS or HTML tag method)
- [ ] Submit sitemap.xml
- [ ] Request indexing for homepage

---

## Phase 5: SEO & Schema (Estimated: 1 day)

### Meta Tags
- [ ] Review title tags on ALL pages (<60 chars)
- [ ] Review meta descriptions on ALL pages (<160 chars)
- [ ] Ensure all pages have unique titles and descriptions
- [ ] Check Open Graph tags for social sharing
- [ ] Verify canonical URLs point to production domain

### Schema Markup
- [ ] Test LocalBusiness schema on homepage with https://search.google.com/test/rich-results
- [ ] Test FAQPage schema on service pages
- [ ] Add Service schema to all service pages
- [ ] Add BreadcrumbList schema to service-area pages
- [ ] Verify all schema validates without errors

### Sitemap
- [ ] Generate new sitemap.xml with all pages
  - Include homepage, about, contact
  - Include all 7+ service pages
  - Include all service-area pages (42+ pages)
  - Include blog posts (if any)
- [ ] Upload sitemap.xml to root directory
- [ ] Update robots.txt to reference sitemap
- [ ] Submit sitemap to Google Search Console

### Internal Linking
- [ ] Verify service pages link to related services
- [ ] Verify location pages link to all services in that location
- [ ] Add location mentions in service pages (link to service-areas)
- [ ] Check footer links on all pages
- [ ] Verify breadcrumb navigation on deep pages

---

## Phase 6: WordPress Migration (Estimated: 1-2 days)

### URL Mapping
- [ ] Document all current WordPress URLs
  - Use Screaming Frog or similar to crawl https://thesoutheastfencer.com.au
  - Export list of all URLs
- [ ] Map each old URL to new static URL
- [ ] Create redirect rules in `vercel.json`:
  ```json
  {
    "redirects": [
      {
        "source": "/old-url/",
        "destination": "/new-url.html",
        "permanent": true,
        "statusCode": 301
      }
    ]
  }
  ```
- [ ] Test redirects on staging before deploying to production

### Blog Migration (if applicable)
- [ ] Export blog posts from WordPress
- [ ] Convert posts to static HTML in `/blog/` directory
- [ ] Maintain URL structure where possible
- [ ] Update internal links in blog posts
- [ ] Add blog index page
- [ ] Update navigation menu to include blog

---

## Phase 7: Testing & QA (Estimated: 1-2 days)

### Functionality Testing
- [ ] Test all forms (submit test leads)
- [ ] Click all navigation links (header, footer, in-page)
- [ ] Test mobile menu (hamburger, accordion dropdowns)
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Test on desktop browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test phone number click-to-call on mobile
- [ ] Test email links (mailto:)
- [ ] Verify all images load correctly
- [ ] Check for broken links (use Screaming Frog or similar)

### Performance Testing
- [ ] Run Lighthouse audit on 5+ pages (aim for 90+ score)
- [ ] Check Core Web Vitals (LCP, FID, CLS)
- [ ] Verify images are optimized and lazy-loaded
- [ ] Test page load speed on mobile (3G simulation)
- [ ] Minimize CSS and JavaScript if needed

### Accessibility Testing
- [ ] Check color contrast (WCAG AA minimum 4.5:1)
- [ ] Test keyboard navigation (tab through all elements)
- [ ] Verify alt text on all images
- [ ] Check heading hierarchy (H1 → H2 → H3, no skips)
- [ ] Test with screen reader (VoiceOver or NVDA)

### SEO Pre-Launch Check
- [ ] **CRITICAL: Remove ALL noindex tags**
  - Search for `noindex` in all HTML files
  - Delete `<meta name="robots" content="noindex,nofollow">` tags
- [ ] Update robots.txt to allow crawling:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://www.thesoutheastfencer.com.au/sitemap.xml
  ```
- [ ] Verify canonical URLs use production domain (not staging)
- [ ] Check that sitemap.xml includes all pages
- [ ] Verify schema markup passes validation

---

## Phase 8: Production Deployment (Launch Day)

### Pre-Launch Final Checks
- [ ] Backup current WordPress site
- [ ] Export WordPress database (just in case)
- [ ] Screenshot key WordPress pages for reference
- [ ] Create list of critical pages to check post-launch
- [ ] Prepare 301 redirect rules in `vercel.json`

### Domain Configuration
- [ ] Log in to Vercel dashboard
- [ ] Go to project: the-south-east-fencer
- [ ] Settings → Domains
- [ ] Add domain: `thesoutheastfencer.com.au`
- [ ] Add domain: `www.thesoutheastfencer.com.au` (alias)
- [ ] Copy DNS configuration provided by Vercel

### DNS Updates
- [ ] Log in to domain registrar (where thesoutheastfencer.com.au is registered)
- [ ] Update DNS records per Vercel instructions:
  - A record: `@` → Vercel IP
  - CNAME record: `www` → `cname.vercel-dns.com`
- [ ] Wait for DNS propagation (15 mins - 24 hours)
- [ ] Test with https://dnschecker.org

### Deploy to Production
```bash
cd ~/the-south-east-fencer

# Final commit
git add .
git commit -m "Production release - all content and SEO updates complete"

# Deploy to production
vercel --prod
```

- [ ] Verify production URL is live
- [ ] Check SSL certificate is active (https://)
- [ ] Test www → non-www redirect (or vice versa)

### Post-Launch Verification
- [ ] Browse 10+ key pages on production site
- [ ] Submit test lead via contact form
- [ ] Verify Google Analytics is tracking (Real-Time report)
- [ ] Check that noindex tags are GONE (view source)
- [ ] Verify robots.txt allows crawling
- [ ] Test 3-5 old WordPress URLs → confirm 301 redirects work
- [ ] Check mobile display on actual device
- [ ] Submit homepage to Google for indexing (Search Console)

---

## Phase 9: Post-Launch (Week 1-2)

### Monitoring
- [ ] Check Google Analytics daily for first week
- [ ] Monitor Google Search Console for crawl errors
- [ ] Check for broken links (Screaming Frog scan)
- [ ] Review form submissions (ensure leads are coming through)
- [ ] Monitor Core Web Vitals in Search Console

### SEO
- [ ] Request indexing for all key pages in Search Console
- [ ] Set up Google Business Profile (if not already done)
- [ ] Add website URL to Google Business Profile
- [ ] Set up Bing Webmaster Tools
- [ ] Submit sitemap to Bing
- [ ] Check for duplicate content issues
- [ ] Monitor keyword rankings (Mornington + service terms)

### Maintenance
- [ ] Set up automated uptime monitoring (e.g., UptimeRobot)
- [ ] Schedule weekly check of contact form functionality
- [ ] Plan monthly content updates (blog posts, case studies)
- [ ] Review analytics monthly (traffic, conversions, top pages)

---

## Critical Reminders

### ⚠️ BEFORE GOING LIVE
1. **Remove ALL `noindex` tags** - Site won't be indexed otherwise!
2. **Update robots.txt** - Must allow crawling
3. **Change Formspree ID** - Don't send leads to wrong business
4. **Change Google Analytics ID** - Track your own data
5. **Test all forms** - Confirm leads come to correct email
6. **Check canonical URLs** - Must point to production domain
7. **Verify 301 redirects** - Old WP URLs must redirect to new site

### ✅ LAUNCH SEQUENCE
1. Complete ALL checklist items above
2. Deploy to production (`vercel --prod`)
3. Update DNS to point to Vercel
4. Wait for DNS propagation
5. Verify production site is live
6. Submit sitemap to Google Search Console
7. Request indexing for homepage
8. Monitor for first 48 hours

---

## Quick Reference

### Important Files
- **Config:** `/site.config.js`
- **Robots:** `/robots.txt`
- **Sitemap:** `/sitemap.xml`
- **Redirects:** `/vercel.json`

### Commands
```bash
# Local dev
npm run dev

# Deploy staging
vercel

# Deploy production
vercel --prod

# Search for term
grep -r "term" --include="*.html"

# Replace in all HTML
find . -name "*.html" -type f -exec sed -i '' 's/old/new/g' {} +
```

### Links
- **Staging:** https://the-south-east-fencer-g4q17o86e-seammedias-projects.vercel.app
- **Vercel Dashboard:** https://vercel.com/seammedias-projects/the-south-east-fencer
- **Google Analytics:** https://analytics.google.com
- **Search Console:** https://search.google.com/search-console
- **Formspree:** https://formspree.io

---

**Progress Tracker:**
- [ ] Phase 1: Content & Design
- [ ] Phase 2: Service Pages
- [ ] Phase 3: Service-Area Pages
- [ ] Phase 4: Forms & Integrations
- [ ] Phase 5: SEO & Schema
- [ ] Phase 6: WordPress Migration
- [ ] Phase 7: Testing & QA
- [ ] Phase 8: Production Deployment
- [ ] Phase 9: Post-Launch

**Target Launch Date:** _____________

**Actual Launch Date:** _____________
