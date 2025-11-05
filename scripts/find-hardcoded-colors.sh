#!/bin/bash

# =============================================================================
# 🔍 Hardcoded Color Finder Script
# =============================================================================
# Description: Searches for hardcoded colors in the codebase
# Author: Development Team
# Date: November 5, 2025
# Usage: ./scripts/find-hardcoded-colors.sh [directory]
# =============================================================================

# Colors for terminal output
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Default search directory
SEARCH_DIR="${1:-.}"

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}🔍 Hardcoded Color Finder${NC}"
echo -e "${BLUE}========================================${NC}"
echo -e "Searching in: ${GREEN}$SEARCH_DIR${NC}\n"

# Counter for issues found
TOTAL_ISSUES=0

# =============================================================================
# Function to search for pattern
# =============================================================================
search_pattern() {
    local pattern=$1
    local description=$2
    local count=0
    
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${YELLOW}Searching for: $description${NC}"
    echo -e "${YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    
    # Search and display results
    results=$(grep -rn --color=always \
        --include="*.tsx" \
        --include="*.ts" \
        --include="*.jsx" \
        --include="*.js" \
        --exclude-dir=node_modules \
        --exclude-dir=.next \
        --exclude-dir=dist \
        --exclude-dir=build \
        -E "$pattern" "$SEARCH_DIR" 2>/dev/null)
    
    if [ -n "$results" ]; then
        echo "$results"
        count=$(echo "$results" | wc -l)
        echo -e "\n${RED}Found $count occurrences${NC}\n"
        TOTAL_ISSUES=$((TOTAL_ISSUES + count))
    else
        echo -e "${GREEN}✓ No issues found${NC}\n"
    fi
}

# =============================================================================
# Search Patterns
# =============================================================================

# 1. Hex Colors (3 or 6 digits)
search_pattern '#[0-9A-Fa-f]{6}|#[0-9A-Fa-f]{3}(?![0-9A-Fa-f])' "Hex Colors (#RRGGBB or #RGB)"

# 2. rgba() functions
search_pattern 'rgba\s*\(\s*[0-9]+\s*,\s*[0-9]+\s*,\s*[0-9]+\s*,\s*[0-9.]+\s*\)' "rgba() Functions"

# 3. rgb() functions
search_pattern 'rgb\s*\(\s*[0-9]+\s*,\s*[0-9]+\s*,\s*[0-9]+\s*\)' "rgb() Functions"

# 4. hsl() functions
search_pattern 'hsl\s*\(\s*[0-9]+\s*,\s*[0-9]+%?\s*,\s*[0-9]+%?\s*\)' "hsl() Functions"

# 5. hsla() functions
search_pattern 'hsla\s*\(\s*[0-9]+\s*,\s*[0-9]+%?\s*,\s*[0-9]+%?\s*,\s*[0-9.]+\s*\)' "hsla() Functions"

# =============================================================================
# Summary
# =============================================================================

echo -e "${BLUE}========================================${NC}"
echo -e "${BLUE}📊 Summary${NC}"
echo -e "${BLUE}========================================${NC}"

if [ $TOTAL_ISSUES -eq 0 ]; then
    echo -e "${GREEN}✓ No hardcoded colors found! 🎉${NC}"
    echo -e "${GREEN}Your codebase is clean!${NC}"
    exit 0
else
    echo -e "${RED}⚠ Total issues found: $TOTAL_ISSUES${NC}"
    echo -e "\n${YELLOW}Recommendations:${NC}"
    echo -e "1. Replace hex colors with semantic tokens:"
    echo -e "   ${GREEN}theme.colors.primary.main${NC}"
    echo -e ""
    echo -e "2. Replace rgba() with alpha() utility:"
    echo -e "   ${GREEN}alpha(theme.colors.primary.main, 0.5)${NC}"
    echo -e ""
    echo -e "3. Use color scales for custom shades:"
    echo -e "   ${GREEN}theme.scales.orange[500]${NC}"
    echo -e ""
    echo -e "See ${BLUE}docs/MIGRATION_GUIDE.md${NC} for details."
    exit 1
fi
