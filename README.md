# paulobarbosa-dev.github.io

Personal portfolio of Paulo Barbosa, Full Stack Software Engineer. Live at https://paulobarbosa-dev.github.io

Built with Astro, GSAP (ScrollTrigger) and Lenis. Portuguese at `/`, English at `/en/`, dark and light themes, and every animation respects `prefers-reduced-motion`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
```

Pushing to `main` deploys to GitHub Pages through `.github/workflows/deploy.yml`.

- Copy (PT and EN): `src/i18n/content.ts`
- Layout and sections: `src/components/`
- Animations: `src/scripts/motion.ts`
- Design brief: `docs/briefing.md`
