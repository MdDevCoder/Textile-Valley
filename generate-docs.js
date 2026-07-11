/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const path = require('path');

const docs = {
  "README.md": "# Textile Valley\n\nPremium Industrial Park website built with Next.js 15, React 19, Tailwind CSS v4, and Framer Motion.\n\n## Quick Start\n```bash\nnpm install\nnpm run dev\n```\n",
  "PROJECT_ARCHITECTURE.md": "# Project Architecture\n\n- **Framework**: Next.js (App Router)\n- **Styling**: Tailwind CSS v4\n- **Animations**: Framer Motion\n- **Maps**: React-Leaflet & react-zoom-pan-pinch\n- **Routing**: Hybrid (Home preview sections + Dedicated SEO pages)\n",
  "DESIGN_SYSTEM.md": "# Design System\n\n- **Typography**: Cormorant Garamond (Headings), Inter (Body), Manrope (UI), Space Grotesk (Numbers).\n- **Colors**: Deep Royal Purple, Premium Gold (`#C5A059`), Soft Gray, Black.\n- **Easings**: Custom cubic-bezier for luxury motion (`easeOutCubic`).\n",
  "COMPONENT_GUIDE.md": "# Component Guide\n\n- `Button`: cva-based luxury button with glow states.\n- `Card`: Hover-elevated containers.\n- `PlotPopup`: Dashboard-style plot details.\n- `MasterPlanViewer`: Interactive map engine.\n",
  "DEPLOYMENT.md": "# Deployment\n\nRecommended: Vercel.\n1. Push to GitHub.\n2. Import project in Vercel.\n3. Ensure environment variables are set (e.g. CRM endpoints).\n4. Deploy.\n",
  "SEO_GUIDE.md": "# SEO Guide\n\n- **Metadata**: Managed in `layout.tsx` (Global) and individual `page.tsx` files.\n- **Schemas**: JSON-LD injected in layout (RealEstateAgent, Organization).\n- **Robots & Sitemap**: Dynamically generated.\n",
  "PERFORMANCE_REPORT.md": "# Performance Report\n\n- **Lighthouse Targets**: 100/100/100/100.\n- **Optimizations**: `next/image` lazy loading, dynamic imports for heavy maps, font display swapping.\n",
  "FINAL_QA_REPORT.md": "# Final QA Report\n\n- [x] Zero TS Errors\n- [x] Zero ESLint Errors\n- [x] Accessibility Audit Passed\n- [x] Master Plan Performance Verified\n",
  "CHANGELOG.md": "# Changelog\n\n## v1.0.0 (Release Candidate)\n- Initial production release.\n- Master plan interactive engine integrated.\n- SEO schemas added.\n",
  "ARCHITECTURE_DECISIONS.md": "# Architecture Decisions (ADR)\n\n- **react-zoom-pan-pinch**: Chosen over D3.js for native React support and better mobile gesture physics.\n- **Leaflet vs Google Maps**: Leaflet allows deep CartoDB dark mode customization without API keys for initial launch.\n",
  "SECURITY_NOTES.md": "# Security Notes\n\n- **Server Actions**: Used for form submissions to obscure endpoints.\n- **Zod Validation**: Ensures strict payload sanitization.\n- **Rate Limiting**: To be implemented on the CRM ingest layer.\n",
  "FUTURE_ROADMAP.md": "# Future Roadmap\n\n- **Phase 1**: CMS Integration (Sanity/Strapi).\n- **Phase 2**: Real-time Plot Availability API.\n- **Phase 3**: 3D Site Visualization overlay.\n",
  "CONTENT_GUIDE.md": "# Content Guide\n\n- **Tone**: Corporate, investment-focused, confident.\n- **Vocabulary**: \"Ecosystem\", \"Strategic\", \"Title-Clear\", \"Global\".\n- **Avoid**: Fluffy generic real-estate terms.\n"
};

for (const [filename, content] of Object.entries(docs)) {
  fs.writeFileSync(path.join(__dirname, 'docs', filename), content);
  console.log(`Generated ${filename}`);
}
