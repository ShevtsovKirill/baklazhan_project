# 🍆 Baklazhan Market

**Baklazhan Market** is an original online grocery store with its own product vision, brand identity and interface — an independent project built from scratch, not based on or borrowed from any existing service.

The whole brand is our own: a dark theme with a vivid violet accent and the eggplant as our mascot. Everything lives in **one self-contained `index.html`** file — markup, styles and logic are inline, with no build step, no backend and no external dependencies.

---

## ✨ Features

- **Product catalog** — 30 items across 8 categories (vegetables, fruits, greens, berries, dairy, bakery, drinks).
- **Live search** by product name.
- **Filters** — price slider, "on sale only", "Kazakhstan 🇰🇿", "eco / farm", country selector.
- **Sorting** — recommended / cheapest / most expensive / by rating.
- **Shopping cart** — slide-over drawer with quantity controls, live totals, **free delivery over 8 000 ₸**, and checkout.
- **Persistent cart** — saved in the browser via `localStorage`, survives page reloads.
- **Responsive** — adapts from desktop down to phone width.
- **Dark violet theme** with friendly rounded typography.

---

## 🎨 Design & originality

The design, color system, layout, copy and brand concept were created by our team specifically for this project. The violet palette, the eggplant mascot, the component styling and the overall look are our own original work — nothing here is copied from another product.

---

## 🛠 Tech

- Plain **HTML + CSS + vanilla JavaScript** — no frameworks, no bundler.
- Google Fonts (Baloo 2 + Manrope) loaded via `<link>`; everything else is inline.
- Product images are emoji on soft color tiles (no image assets to host).

---

## 🚀 Run locally

Just open the file in a browser:

```bash
open index.html        # macOS
# or double-click the file
```

> Make sure the file keeps its `<meta charset="utf-8">` tag — without it, browsers may garble the Cyrillic text when opening via `file://`.

---

## 🌐 Deploy

This is a pure static page, so any static host works. Rename the file to **`index.html`** first.

**Easiest — Netlify Drop**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag & drop `index.html`
3. Get a live URL instantly.

**With version history — GitHub Pages**
```bash
git init && git add index.html && git commit -m "baklazhan market"
git branch -M main
git remote add origin https://github.com/<user>/<repo>.git
git push -u origin main
```
Then: **Settings → Pages → Source: `main` / root**.

Other good free options: **Cloudflare Pages**, **Vercel**. No Node, server, or database required.

---

## 📁 Structure

```
index.html        # the entire app (HTML + CSS + JS inline)
README.md         # this file
```

---

## ⚠️ Limitations

This is a **front-end demo**. It has no backend, so:
- The cart lives only in the visitor's browser (`localStorage`).
- Checkout shows a confirmation toast but does **not** place a real order or process payment.
- Products are hardcoded in the JS array.

---

## 🧭 Roadmap

- [ ] Backend for products & orders (e.g. Supabase / Firebase)
- [ ] Payment integration (Kaspi, Stripe)
- [ ] User accounts & order history
- [ ] Admin panel for the catalog
- [ ] Mobile app (iOS / Android)

---

*An original project · 2026 · © Baklazhan Market. All rights reserved.*

