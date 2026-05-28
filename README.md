# 1 Mi Taller Auto Repair Corp. — Website Redesign

Modern, mobile-first redesign demo for **1 Mi Taller Auto Repair Corp.**, a neighborhood auto repair shop in Woodside, Queens, NY.

**Live site (after setup):** [https://astridbonoan.github.io/1-Mi-Taller-Auto-Repair.io/](https://astridbonoan.github.io/1-Mi-Taller-Auto-Repair.io/)

## Tech Stack

- React 19 + TypeScript
- Vite 8
- Tailwind CSS 4

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages (Deploy from branch)

This repo uses **GitHub Actions** to build the site and push static files to the **`gh-pages`** branch.

### One-time GitHub setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**:
   - **Source:** Deploy from a branch
   - **Branch:** `gh-pages` / `/ (root)`
4. Save. The site will update on every push to `main`.

The workflow file is at `.github/workflows/deploy.yml`.

## Project Structure

```
src/
  components/   # UI sections (Hero, Services, Contact, etc.)
  data/         # Business copy and content
  hooks/        # Scroll animations
public/
  logo.png      # Official shop logo
```

## Business Contact

- **Phone:** (718) 424-7289
- **Address:** 51-06 70th St, Woodside, NY 11377
- **Hours:** Mon–Fri 7 AM–9 PM · Sat 7 AM–7 PM · Sun Closed
