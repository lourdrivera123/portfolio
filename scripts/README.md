# Icon Prebuild System

This folder contains scripts for pre-fetching and caching Simple Icons at build time to eliminate runtime dependencies and improve performance.

## How it works

1. **`prebuild-icons.js`** - Fetches all icons from Simple Icons CDN based on the slugs defined in `src/constants/skills.ts`
2. **Generated files** - Creates `src/data/prebuilt-icons.json` with all icon data and TypeScript types
3. **HybridIconCloud** - Uses pre-built icons when available, falls back to dynamic loading

## Usage

```bash
# Manually run prebuild (happens automatically during build)
npm run prebuild-icons

# Build with prebuild (recommended)
npm run build
```

## Benefits

- ✅ **Zero runtime errors** - No SSR/hydration issues
- ✅ **Fast loading** - Icons are bundled with the app
- ✅ **Offline support** - No external CDN dependencies
- ✅ **Reliable** - Always works even if CDN is down
- ✅ **Automatic fallback** - Falls back to dynamic loading if needed

## Generated Files

- `src/data/prebuilt-icons.json` - Icon data and SVG content
- `src/data/prebuilt-icons.types.ts` - TypeScript type definitions

*Note: Generated files are in `.gitignore` and rebuilt on each deployment for freshness.*
