# Ahmad Naufal Farras — AI Engineer Portfolio

Live: **https://eycoo.github.io/portfolio/**

Stack: Vite + React 18 + TypeScript + Tailwind CSS v4 + Framer Motion + react-i18next

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
