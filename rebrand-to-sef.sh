#!/bin/bash

# Rebranding script: Mornington Peninsula Roofing → The South East Fencer
# This script performs global find-and-replace across all HTML files

set -e

echo "🔄 Starting rebranding from MPR to SEF..."

# Navigate to project root
cd "$(dirname "$0")"

# Function to replace in files
replace_in_files() {
    local pattern="$1"
    local replacement="$2"
    local file_pattern="$3"

    echo "  Replacing '$pattern' → '$replacement' in $file_pattern files..."

    find . -type f -name "$file_pattern" \
        -not -path "*/node_modules/*" \
        -not -path "*/.git/*" \
        -not -path "*/.vercel/*" \
        -not -path "*/rebrand-to-sef.sh" \
        -exec sed -i '' "s|$pattern|$replacement|g" {} +
}

echo "📝 Phase 1: Brand Name Replacements"
replace_in_files "Mornington Peninsula Roofing" "The South East Fencer" "*.html"
replace_in_files "mornington-peninsula-roofing" "the-south-east-fencer" "*.html"
replace_in_files "morningtonpeninsularoofing\.com\.au" "thesoutheastfencer.com.au" "*.html"
replace_in_files "www\.morningtonpeninsularoofing\.com\.au" "www.thesoutheastfencer.com.au" "*.html"

echo "📝 Phase 2: Tagline and Subtitle Replacements"
replace_in_files "The Roofing Specialists" "The Timber Fencing Specialists" "*.html"
replace_in_files "Quality roofers for 25\+ years" "Professional fencing solutions for 25+ years" "*.html"
replace_in_files "Quality Roofers for 25\+ Years" "Professional Fencing Solutions for 25+ Years" "*.html"

echo "📝 Phase 3: Service Industry Terms"
replace_in_files "roofing" "fencing" "*.html"
replace_in_files "Roofing" "Fencing" "*.html"
replace_in_files "roofers" "fencers" "*.html"
replace_in_files "Roofers" "Fencers" "*.html"
replace_in_files "roof" "fence" "*.html"
replace_in_files "Roof" "Fence" "*.html"

echo "📝 Phase 4: Contact Details"
# Phone stays the same (03 4152 7766)
replace_in_files "info@morningtonpeninsularoofing\.com\.au" "info@thesoutheastfencer.com.au" "*.html"

echo "📝 Phase 5: CSS and Class Names"
replace_in_files "mpr-" "sef-" "*.html"
replace_in_files "mpr-" "sef-" "*.css"

echo "📝 Phase 6: Logo References"
replace_in_files "MP<" "SEF<" "*.html"
replace_in_files "\"MP\"" "\"SEF\"" "*.html"

echo "📝 Phase 7: Service Area Descriptions"
replace_in_files "Mount Eliza to Sorrento" "across Mornington Peninsula \\& South-East Melbourne" "*.html"
replace_in_files "from Mount Eliza to Sorrento" "across Mornington Peninsula \\& South-East Melbourne" "*.html"

echo "✅ Rebranding complete!"
echo ""
echo "⚠️  MANUAL STEPS REQUIRED:"
echo "  1. Review and update service pages (roof → fence services)"
echo "  2. Replace hero images in /img/ directory"
echo "  3. Update CSS files in /assets/css/"
echo "  4. Review all meta descriptions for accuracy"
echo "  5. Update sitemap.xml"
echo ""
