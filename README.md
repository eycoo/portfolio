# Ahmad Naufal Farras | AI Engineer Portfolio

Live: **https://eycoo.github.io/portfolio/**

Stack: Vite + React 19 + TypeScript + Tailwind CSS v4 + Framer Motion + react-i18next

---

## Local development

```bash
npm install
npm run dev        # → http://localhost:5173/portfolio/
```

## Build & preview

```bash
npm run build
npm run preview    # → http://localhost:4173/portfolio/
```


## Interface

- Indonesian is the default; the language control switches to English and updates the document language.
- Pine-green and petrol gradients distinguish the introduction and contact sections. Dark green reading surfaces keep project details separate from those entry points; mint highlights the name and primary action.
- Inter Tight keeps long project titles compact. Inter remains the body font. Fluid type and spacing let the name lead without crowding technical details on small screens.
- Projects, technical skills, profile, experience, and awards retain their source data and section order. Rows support scanning; expandable details keep the initial view short.
- Navigation and button labels render once. There is no looping marquee, duplicated glyph stack, or scroll-reveal animation. Motion is limited to user-triggered interactions; CSS respects reduced-motion preferences.
- Project filters expose selection state. The certificate dialog supports Escape, trapped keyboard focus, and focus restoration. The mobile menu supports Escape and scrolling on short screens.
- Section navigation uses native anchor links without animated page scrolling, so mobile menu closure cannot interrupt the jump to its destination.

---

## Replacing assets

### Project images
Drop files into `public/images/projects/` matching the `image` field in `src/data/projects.ts`.

| Project | Filename |
|---------|----------|
| TB Cough Detection | `tb-cough.jpg` |
| Chat to Core | `chat-to-core.jpg` |
| Chest X-Ray | `chest-xray.jpg` |
| Synthetic Data | `synthetic-data.jpg` |
| CodeSight | `codesight.jpg` |
| Cough Pose | `cough-pose.jpg` |

### CV PDF
Compile `cv/cv.tex` → save as `public/cv/Ahmad_Naufal_Farras_CV.pdf`.

### Project links
Edit `src/data/projects.ts`, set `links.github`, `links.demo`, or `links.paper`.

---

## Deploy to GitHub Pages

1. Create a GitHub repo named **`portfolio`** under your account `eycoo`.
2. Push this folder:
   ```bash
   git init
   git add .
   git commit -m "feat: initial portfolio"
   git remote add origin https://github.com/eycoo/portfolio.git
   git push -u origin main
   ```
3. On GitHub → repo Settings → Pages → Source: **GitHub Actions**.
4. The `deploy.yml` workflow runs automatically on every push to `main`.
5. Site goes live at `https://eycoo.github.io/portfolio/`.
