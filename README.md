<div align="center">

<img src="docs/banner.svg" alt="Group 6 — Meta-Analysis Report Presentation" width="100%" />

# 📊 Meta-Analysis Report Presentation — Group 6

**A fully responsive, animated web presentation deck for an academic Systematic Review & Meta-Analysis.**
Built with React 19 · Vite · TypeScript · Tailwind CSS 4

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-GitHub_Pages-2563eb?style=for-the-badge&logo=github&logoColor=white)](https://shimul-bappi.github.io/Group-6-Meta-Analysis-Presentation-Slide/)
[![React](https://img.shields.io/badge/React-19-61dafb?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646cff?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-10b981?style=flat-square)](./LICENSE)

</div>

---

## 👥 Group — 6 Members

| # | Name | ID | Research Responsibility |
|---|------|----|------------------------|
| 1 | **Md. Shimul Ahmed Bappi** | `823` | Project Lead · Statistical Synthesis & Forest Plot Modeling |
| 2 | **Raaj Chandra Dash** | `824` | Literature Retrieval · PRISMA 2020 Protocol Lead |
| 3 | **Shohanur Rahman** | `865` | Data Extraction · Subgroup & Meta-Regression Analysis |
| 4 | **Mirajul Islam Raju** | `866` | Publication Bias · Funnel Plot & Sensitivity Modeling |
| 5 | **Md. Ariful Hossain Sourav** | `870` | Methodological Quality · Cochrane RoB 2.0 Appraisal |
| 6 | **Ajoy Kumar** | `880` | GRADE Evidence Profiler · Discussion & Policy Guidelines |

> **Note:** Individual presenter names are intentionally hidden from the slide content pages — the deck focuses purely on the data. The full team roster appears only on the **Title slide** and the **Conclusion slide**.

---

## ✨ Overview

This project is an **interactive academic presentation deck** that replaces a static PowerPoint with a live, data-driven web experience. It walks through a complete meta-analysis of **18 multi-center randomized controlled trials** (pooled *N* = 12,450) and includes genuinely functional statistical visualizations — not screenshots.

**Headline result rendered live in the deck:**

```
Pooled Effect Size (SMD)   : -0.43  [95% CI: -0.52, -0.34]
Equivalent Odds Ratio      :  0.64  [95% CI:  0.54,  0.76]
Test for Overall Effect    :  Z = 9.18,  p < 0.0001
Heterogeneity              :  Q = 28.61 (df = 9, p = 0.027) · I² = 46.8% · τ² = 0.038
```

---

## 🎬 The 16 Slides

| # | Slide | Highlights |
|---|-------|-----------|
| 01 | **Title & Research Team** | Animated gradient title, team cards with staggered entrance |
| 02 | **Executive Summary & PICO** | PICO framework grid + 4 KPI scorecards |
| 03 | **Background & Problem** | Conflicting evidence vs. meta-analytic resolution |
| 04 | **PRISMA Protocol & Search** | 6 databases, live Boolean/MeSH search string |
| 05 | **PRISMA 2020 Flow Diagram** | 🖱️ Clickable funnel nodes with audit inspector |
| 06 | **Study Characteristics** | Delivery modality breakdown bars (58% / 24% / 18%) |
| 07 | **Cochrane RoB 2.0** | 🚦 Traffic-light matrix + domain summary bars |
| 08 | **Primary Synthesis & Forest Plot** | 📈 **Interactive** — model swap, subgroup filter, SMD↔OR |
| 09 | **Heterogeneity Analysis** | Higgins I² benchmark gauge with live position marker |
| 10 | **Subgroup Stratification** | Digital vs. Hybrid vs. In-Person comparison |
| 11 | **Meta-Regression** | Bubble plot with weighted regression slope |
| 12 | **Publication Bias & Funnel Plot** | 🎛️ Egger's fit + Trim-and-Fill toggle |
| 13 | **Leave-One-Out Sensitivity** | Robustness verification panel |
| 14 | **GRADE Evidence Profile** | Summary of Findings table with certainty ratings |
| 15 | **Live Meta-Analysis Sandbox** | ⚡ Recomputes pooled effect, Q & I² in real time |
| 16 | **Conclusion & Q&A** | 🎉 Confetti finale + contribution matrix |

---

## 🚀 Key Features

### 🖥️ Presentation Engine
- **16 fully responsive slides** — flawless on phones, tablets, laptops, projectors & ultra-wide displays
- **Autoplay slideshow mode** with configurable 9-second interval
- **Presenter Console** — built-in timer, talking-point script, next-slide preview
- **Speaker Notes drawer** — collapsible key-takeaway panel on any slide
- **Slide overview grid** with instant search & jump-to-slide
- **Laser pointer mode** for live audience pointing

### ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `F` | Toggle fullscreen |
| `L` | Toggle laser pointer |
| `P` | Presenter console |
| `G` / `O` | Slides overview grid |
| `R` | Recommended report file |
| `M` | Mute / unmute audio |
| `Esc` | Close modal · disable laser |

> 📱 **Swipe gestures** are enabled for touch devices.

### 📊 Interactive Statistical Visualizations
- **Forest Plot** — toggle **DerSimonian-Laird Random-Effects** ↔ **Inverse-Variance Fixed-Effects**, filter by modality, switch metric between SMD and OR. The summary diamond and pooled CI **recompute live**.
- **Live Meta-Analysis Sandbox** — include/exclude individual trials to perform a real leave-one-out sensitivity test; watch pooled SMD, Cochran's Q and Higgins I² update instantly.
- **Funnel Plot** — toggle Egger's regression fit and Duval & Tweedie Trim-and-Fill imputed studies.
- **PRISMA Flow Diagram** — click any stage to inspect audit metrics and exclusion reasons.
- **RoB 2.0 Matrix** — filterable traffic-light assessment plus per-domain percentage bars.

### 🔊 Polish & Motion
- Staggered `fadeIn` / `slideUp` / `popIn` entrance animations
- Floating ambient gradient orbs & dot-grid backdrop
- **Web Audio API** synthesized slide-transition blips and success chime (no asset files)
- 🎊 **Canvas confetti** celebration on the final slide

### 📄 Recommended Report File
Press **`R`** or click **Report File** in the header to open an in-app viewer with the full research report: complete PRISMA protocol, forest-plot data table, RoB 2.0 domain breakdown, GRADE profile and member contributions.
- 🔍 Search within the document
- 📋 Copy to clipboard
- ⬇️ Download as **`.txt`** or **`.md`**

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| **Framework** | React 19 + TypeScript 5.9 |
| **Build Tool** | Vite 7 (single-file output via `vite-plugin-singlefile`) |
| **Styling** | Tailwind CSS 4 (`@tailwindcss/vite`) |
| **Icons** | [lucide-react](https://lucide.dev) |
| **Confetti** | [canvas-confetti](https://github.com/catdad/canvas-confetti) |
| **Audio** | Native Web Audio API (zero audio assets) |

### 📁 Project Structure

```
Group-6-Meta-Analysis-Presentation-Slide/
├── src/
│   ├── App.tsx                        # Root: state, routing, keyboard & swipe input
│   ├── index.css                      # Tailwind entry + custom keyframe animations
│   ├── main.tsx                       # React DOM bootstrap
│   ├── components/
│   │   ├── Navigation.tsx             # Top header bar + bottom floating dock
│   │   ├── SlideContent.tsx           # All 16 slide layouts (switch router)
│   │   ├── ForestPlot.tsx             # Interactive forest plot + pooled diamond
│   │   ├── PrismaDiagram.tsx          # PRISMA 2020 flow with audit inspector
│   │   ├── RiskOfBiasMatrix.tsx       # RoB 2.0 traffic-light matrix
│   │   ├── FunnelPlot.tsx             # Funnel plot + Egger's + Trim & Fill
│   │   ├── MetaSimulator.tsx          # Live leave-one-out recalculation sandbox
│   │   ├── ReportModal.tsx            # Recommended report viewer/downloader
│   │   ├── SlideOverviewModal.tsx     # Searchable 16-slide grid
│   │   ├── PresenterMode.tsx          # Fullscreen console + timer + notes
│   │   ├── SpeakerNotesDrawer.tsx     # Collapsible notes panel
│   │   ├── ShortcutsModal.tsx         # Keyboard shortcut reference
│   │   └── LaserPointer.tsx           # Animated laser pointer overlay
│   ├── data/
│   │   ├── slidesData.ts              # Slide defs, team roster, study dataset
│   │   └── reportText.ts              # Full recommended report text export
│   ├── types/
│   │   └── presentation.ts            # Shared TypeScript interfaces
│   └── utils/
│       ├── audio.ts                   # Web Audio synthesis helpers
│       └── cn.ts                      # Class-name merge utility
├── docs/
│   └── banner.svg                     # Repository social banner
├── .github/workflows/deploy.yml       # GitHub Pages CI/CD
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## ⚡ Getting Started

### Prerequisites

| Tool | Version |
|------|---------|
| **Node.js** | `≥ 18.x` (v20+ recommended) |
| **npm** | `≥ 9.x` |

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation-Slide.git

# 2️⃣ Navigate into the project
cd Group-6-Meta-Analysis-Presentation-Slide

# 3️⃣ Install dependencies
npm install

# 4️⃣ Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`** 🎉

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Type-check & bundle for production → `dist/` |
| `npm run preview` | Preview the production build locally |

> 💡 Because `vite-plugin-singlefile` is enabled, `npm run build` emits a **single self-contained `dist/index.html`** — all JS and CSS are inlined. You can email it, drop it on a USB stick, or open it directly offline with **zero server required**. Perfect for submitting academic coursework.

---

## ☁️ Deployment

### Option 1 — GitHub Pages (fully automated ✅)

This repo ships with a ready-made workflow at **`.github/workflows/deploy.yml`**.

1. Push your code to the `main` branch.
2. Open **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Every push now builds and publishes automatically.

> ⚠️ **Sub-path note:** GitHub Pages serves from `/Group-6-Meta-Analysis-Presentation-Slide/`. Because all assets are inlined into a single `index.html`, the default build works as-is. If you ever add external assets, add `base: "/Group-6-Meta-Analysis-Presentation-Slide/"` to `defineConfig()` in `vite.config.ts`.

### Option 2 — Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation-Slide)

Import the repo → Framework preset **Vite** → Build `npm run build` → Output `dist`.

### Option 3 — Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation-Slide)

Build command `npm run build` · Publish directory `dist`.

---

## 📖 Methodology Reference

The deck implements and presents the following established evidence-synthesis standards:

| Standard | Application in this deck |
|----------|--------------------------|
| **PRISMA 2020** | Search strategy, screening funnel, exclusion-reason audit |
| **Cochrane RoB 2.0** | 5-domain risk-of-bias traffic-light assessment |
| **GRADE** | Certainty-of-evidence Summary of Findings table |
| **DerSimonian & Laird** | Random-effects pooled estimator |
| **Higgins & Thompson** | I² heterogeneity statistic |
| **Egger / Begg** | Funnel-plot asymmetry tests |
| **Duval & Tweedie** | Trim-and-fill imputation |

> 📚 **Disclaimer:** The study-level effect sizes and confidence intervals presented here are *illustrative academic demonstration data* created by Group 6 for coursework purposes, and are not sourced from a real published clinical trial registry.

---

## 🤝 Contributing

Contributions are welcome from Group 6 members and the wider community!

```bash
# Fork → create a feature branch
git checkout -b feature/your-amazing-feature

# Commit with a clear message
git commit -m "feat: add your amazing feature"

# Push and open a Pull Request
git push origin feature/your-amazing-feature
```

Please keep changes **fully responsive** and verify `npm run build` passes before opening a PR. See [CONTRIBUTING.md](./CONTRIBUTING.md) for details.

---

## 📜 License

Released under the **MIT License** — free to use, study, modify and redistribute.
See the full text in [`LICENSE`](./LICENSE).

---

## 🙏 Acknowledgements

- Our respected **course instructors and supervisors** for continuous guidance
- The **Cochrane Collaboration** for open methodological guidance
- The open-source maintainers of **React**, **Vite**, **Tailwind CSS**, **lucide-react** and **canvas-confetti**

---

<div align="center">

### 🎓 Presented by Group — 6

**Md. Shimul Ahmed Bappi (823)** · **Raaj Chandra Dash (824)** · **Shohanur Rahman (865)**
**Mirajul Islam Raju (866)** · **Md. Ariful Hossain Sourav (870)** · **Ajoy Kumar (880)**

⭐ **Found this useful? Please give the repo a star!** ⭐

Made with ❤️ and a lot of coffee

</div>
# Group-6-Meta-Analysis-Presentation
