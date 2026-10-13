```markdown
# Association Between Red & Processed Meat Consumption and Colorectal Cancer Risk: A Meta-Analysis

[![Live Presentation](https://img.shields.io/badge/GitHub%20Pages-Live%20Presentation-06b6d4?style=for-the-badge&logo=github&logoColor=white)](https://shimul-bappi.github.io/Group-6-Meta-Analysis-Presentation/)
[![Repository](https://img.shields.io/badge/GitHub-Repository-3b82f6?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation)
[![Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20ES6+-10b981?style=for-the-badge)](#tech-stack)
[![Dependencies](https://img.shields.io/badge/Dependencies-Zero%20(Pure%20Vanilla)-8b5cf6?style=for-the-badge)](#tech-stack)
[![License: MIT](https://img.shields.io/badge/License-MIT-f43f5e?style=for-the-badge)](#license)

> **Live Interactive Slide Deck:**  
> 🔗 [https://shimul-bappi.github.io/Group-6-Meta-Analysis-Presentation/](https://shimul-bappi.github.io/Group-6-Meta-Analysis-Presentation/)

An interactive, fully responsive 15-slide scientific presentation deck presenting a systematic review and random-effects meta-analysis of prospective epidemiological studies investigating the association between red and processed meat consumption and colorectal cancer (CRC) risk.

---

## 👥 Research Team (Group 6)

| Student ID | Name | GitHub Profile | Contribution Area |
| :---: | :--- | :---: | :--- |
| **823** | **Md. Shimul Ahmed Bappi** | [@Shimul-Bappi](https://github.com/Shimul-Bappi) | Lead Author, Systematic Review & Synthesis |
| **824** | **Raaj Chandra Dash** | Team Member | Statistical Modeling (REML, Hartung–Knapp) & Sensitivity |
| **865** | **Shohanur Rahman** | Team Member | PRISMA Screening & Characteristics Extraction |
| **866** | **Mirajul Islam Raju** | Team Member | Subgroup Analyses (Country & Sex) & Meta-Regression |
| **870** | **Md. Ariful Hossain Sourav** | Team Member | Publication Bias Diagnostics (Egger & Begg) |
| **880** | **Ajoy Kumar** | Team Member | Biological Plausibility, Toxicology & Translation |

---

## 📊 Summary of Meta-Analytic Findings

| Parameter | Estimate / Value | 95% Confidence Interval | Test Statistic & Significance | Interpretation |
| :--- | :---: | :---: | :---: | :--- |
| **Pooled RR (REML + HK)** | **`1.12`** | `[1.03, 1.22]` | $t = 2.91, p = 0.0103$ | **Statistically significant 12% risk increase** |
| **Common-Effect RR** | **`1.09`** | `[1.05, 1.13]` | $z = 4.72, p < 0.0001$ | Standard inverse-variance fixed estimate |
| **Cohort Population** | **`~1,379,000`** | — | 17 estimates (16 studies) | Spanning USA, Finland, Netherlands, Australia, Canada, China |
| **Incident CRC Cases** | **`14,357`** | — | Verified incident cancers | Pathology-confirmed endpoints |
| **Heterogeneity ($I^2$)** | **`55.3%`** | `[22.8%, 74.1%]` | $Q = 35.77, df = 16, p = 0.0031$ | Moderate-to-substantial between-study dispersion |
| **Variance ($\tau^2$)** | **`0.0060`** | — | $\tau = 0.077$ | True variance across study settings |
| **95% Prediction Interval** | **`0.94 – 1.34`** | — | Crosses null (1.00) | Future study association may be null or modestly positive |
| **Egger's Regression** | **`b = 0.072`** | `[-0.040, 0.184]` | $z = 0.98, p = 0.325$ | No evidence of funnel plot asymmetry |
| **Begg's Rank Test** | **`Kendall's tau`** | — | $z = 0.66, p = 0.510$ | No correlation between effect size and study standard error |
| **Leave-One-Out Range** | **`1.10 – 1.14`** | All CIs exclude 1.00 | All runs $p \le 0.0043$ | Finding is stable; not driven by any single cohort |
| **Meta-Regression (Year)** | **`β = -0.0180`** | $SE = 0.0083$ | $p = 0.031$ | **~16% lower RR per decade** ($\exp(-0.18) \approx 0.84$) |

---

## 🗂️ 15-Slide Presentation Architecture

The slide deck strictly corresponds to the 15-page meta-analysis report:

```
Slide 01 ── Title Slide: Research Team (Group 6), Background & Abstract
Slide 02 ── Colorectal Cancer: Anatomy, Tumor Progression & Clinical Diagnosis (Images)
Slide 03 ── Executive Summary: REML Dashboard & Global CRC Breakdown by Sex (GLOBOCAN)
Slide 04 ── Background & Clinical Rationale: PICO Problem Formulation
Slide 05 ── PRISMA 2020 Flow Diagram: Database Screening & Study Selection
Slide 06 ── Statistical Methodology: Log-RR Transformations, REML & Hartung–Knapp
Slide 07 ── Characteristics of 17 Included Studies (1990–2010 Cohort Matrix Table)
Slide 08 ── Primary Forest Plot (Figure 1 from Report): Interactive SVG Vector Plot
Slide 09 ── Publication Bias & Funnel Plot (Figure 2 from Report): Egger & Begg Tests
Slide 10 ── Sensitivity & Influence Diagnostics (Figure 3 from Report): 8 Vector Plots + Image
Slide 11 ── Subgroup Analyses (Figures 4, 5 & Table 1): Stratified by Country & Sex
Slide 12 ── Meta-Regression Analysis (Table 2 from Report): Publication Year & Sample Size
Slide 13 ── Carcinogenic Mechanisms: Heme Iron, N-Nitroso Compounds (NOCs) & Thermal HCAs
Slide 14 ── Methodological Strengths & Inherent Epidemiological Limitations
Slide 15 ── Conclusion & Public Health Recommendations (WCRF / IARC Guidance)
```

---

## 🖼️ Medical Figures & Diagnostic Assets

All local diagrams and original figures are stored in the `/img` directory:

| Filename | Presentation Slide | Description |
| :--- | :---: | :--- |
| **`img/Colorectal Cancer.png`** | **Slide 02** | Staging and anatomical localization of colorectal adenomas and carcinomas |
| **`img/colon-cancer-colorectal-cancer-symptoms-diagnosis.jpg`** | **Slide 02** | Clinical symptom presentation, staging, and colonoscopic diagnostic methods |
| **`img/influence-diagnostics-plot.png`** | **Slide 10** | Original multi-panel influence plot (`rstudent`, `cook.d`, `dffits`, `cov.r`, `tau2.del`, `QE.del`, `hat`, `weight`) |

> **Interactive Vector Graphics (SVG):** Figures 1, 2, 3, 4, and 5 are also drawn directly inside `app.js` using mathematical log-relative-risk coordinate projections.

---

## ⌨️ Controls & Navigation

| Input Method | Key / Action | Functionality |
| :--- | :---: | :--- |
| **Next Slide** | <kbd>→</kbd> / <kbd>Space</kbd> / <kbd>PageDown</kbd> | Move forward |
| **Previous Slide** | <kbd>←</kbd> / <kbd>PageUp</kbd> | Move backward |
| **First / Last** | <kbd>Home</kbd> / <kbd>End</kbd> | Jump to Slide 01 / Slide 15 |
| **Slide Overview** | <kbd>O</kbd> | Open 15-slide grid navigator modal |
| **Fullscreen** | <kbd>F</kbd> | Toggle browser fullscreen presentation mode |
| **Dismiss Modal** | <kbd>Esc</kbd> | Close outline grid or overlay |
| **Touch Gestures** | **Swipe Left / Right** | Navigate forward / backward on mobile and tablets |
| **HUD Controls** | **Bottom Dots / Buttons** | Click any dot to jump directly to that slide |
| **Direct URL Linking**| `#slide-1` to `#slide-15` | Browser hash routing preserves active slide state |

---

## 📁 Repository Directory Structure

```text
Group-6-Meta-Analysis-Presentation/
├── img/
│   ├── Colorectal Cancer.png
│   ├── colon-cancer-colorectal-cancer-symptoms-diagnosis.jpg
│   └── influence-diagnostics-plot.png
├── index.html        # 15-Slide HTML5 presentation structure
├── styles.css        # Responsive styling, CSS Grid, glassmorphism, animations
├── app.js            # Engine: SVG plot mathematical rendering, touch & keyboard logic
├── README.md         # Repository documentation & statistical summary
└── .gitignore        # Git ignore rules
```

---

## 💻 Tech Stack

* **Markup:** Semantic HTML5 (W3C validated, accessible `aria` attributes)
* **Styling:** Vanilla CSS3 (Custom properties, CSS Grid, Flexbox, hardware-accelerated animations)
* **Scripting:** Pure ES6+ JavaScript (Zero external libraries, zero build tools)
* **Graphics:** Scalable Vector Graphics (SVG) with mathematical coordinate projection
* **Typography:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) & [JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

---

## 🚀 Local Development & Preview

Run the presentation locally without needing Node.js or build steps:

```bash
# 1. Clone this repository
git clone https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation.git

# 2. Navigate into the directory
cd Group-6-Meta-Analysis-Presentation

# 3. Start a local server (choose any option below)
# Option A: Python 3
python3 -m http.server 8000

# Option B: Node.js (via npx)
npx serve .

# Option C: VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
```

Open your browser and navigate to `http://localhost:8000`.

---

## 🌐 How to Enable GitHub Pages

To host this presentation online:

1. Open your repository on GitHub: [Group-6-Meta-Analysis-Presentation](https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation).
2. Go to **Settings** &rarr; **Pages** (under the left sidebar *Code and automation* section).
3. Under **Build and deployment**:
   * **Source:** `Deploy from a branch`
   * **Branch:** `main` (or `master`)
   * **Folder:** `/(root)`
4. Click **Save**.
5. Wait 30–60 seconds. Your presentation will be live at:
   **`https://shimul-bappi.github.io/Group-6-Meta-Analysis-Presentation/`**

---

## 🔬 Statistical References & Software

* **Analysis Packages:** Meta-analytic pooling conducted using the `meta` (v6.x) and `metafor` (v4.x) packages in **R** (R Core Team).
* **Heterogeneity Metric:** Cochran’s $Q$, Higgins & Thompson's $I^2$ ($[Q - df] / Q \times 100\%$), and Restricted Maximum Likelihood estimate of $\tau^2$.
* **Standard Errors:** Hartung–Knapp (`HK`) adjustment applied to random-effects model confidence intervals.
* **Reporting Guidelines:** Formulated in accordance with **PRISMA 2020** (*Preferred Reporting Items for Systematic Reviews and Meta-Analyses*).

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, adapt, or cite this deck for academic and educational presentations.
```
