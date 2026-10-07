# Contributing to Group 6 — Meta-Analysis Presentation

Thank you for contributing! 🎉 Please follow the guidelines below to keep the
deck consistent, responsive and build-clean.

---

## 🚀 Getting Set Up

```bash
git clone https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation-Slide.git
cd Group-6-Meta-Analysis-Presentation-Slide
npm install
npm run dev
```

---

## 🌿 Branch Naming

| Type      | Prefix        | Example                          |
| --------- | ------------- | -------------------------------- |
| New slide | `feat/slide-` | `feat/slide-17-limitations`      |
| New chart | `feat/chart-` | `feat/chart-radar-plot`          |
| Bug fix   | `fix/`        | `fix/mobile-dock-overlap`        |
| Styling   | `style/`      | `style/light-theme-contrast`     |
| Docs      | `docs/`       | `docs/update-readme-team-table`  |
| Refactor  | `refactor/`   | `refactor/extract-slide-context` |

---

## 💬 Commit Convention

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat:     add new slide or interactive feature
fix:      resolve a bug or layout break
style:    visual / Tailwind class changes only
refactor: code restructuring with no behavior change
docs:     README or documentation updates
perf:     performance improvement
chore:    tooling, deps or config changes
```

---

## ✅ Before Opening a Pull Request

Please verify every item:

- [ ] `npm run build` completes with **zero errors**
- [ ] Tested at **320 px** (small phone) width
- [ ] Tested at **768 px** (tablet) width
- [ ] Tested at **1440 px+** (desktop / projector) width
- [ ] No horizontal overflow or scroll-jank on any slide
- [ ] All new colors use the **light theme** palette (white cards, `slate-200` borders, pastel accents)
- [ ] Animations respect existing `fadeIn` / `slideUp` / `popIn` keyframes
- [ ] No personal presenter names added to slide content pages
- [ ] Data changes are reflected in `src/data/reportText.ts` if applicable

---

## 🎨 Design Conventions

- **Theme:** light only. White surfaces, `border-slate-200`, soft shadows (`shadow-slate-900/5`).
- **Accents:** cyan-600 (primary), indigo-600, emerald-600, amber-500, rose-500.
- **Text:** `text-slate-900` for headings, `text-slate-600` for body copy.
- **Cards:** `rounded-2xl` with `border border-slate-200`.
- **Stat values:** always render in `font-mono`.

---

## 🐛 Found a Bug?

Open an [issue](https://github.com/Shimul-Bappi/Group-6-Meta-Analysis-Presentation-Slide/issues)
and include:

1. Slide number where the bug appears
2. Device / viewport width
3. Steps to reproduce
4. Expected vs. actual behavior
5. A screenshot if possible

---

<div align="center">
<b>Thanks for helping improve Group 6's presentation! 📊</b>
</div>
