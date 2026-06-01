# Listicle Social Media Template

A browser-based tool for building aesthetic listicle posts for Instagram, Stories, Twitter, and more. No installs, no accounts — just open `index.html` and start designing.

![Template Preview](https://picsum.photos/seed/dark-forest/1200/400)

---

## Demo

[![Watch the demo on YouTube](https://img.youtube.com/vi/A1DIiYFitUo/maxresdefault.jpg)](https://youtu.be/A1DIiYFitUo)

> Click the thumbnail above to watch a short walkthrough of the template in action.

---

## Download

**Option 1 — Direct ZIP download (no Git required):**

1. Click the green **Code** button at the top of this page
2. Select **Download ZIP**
3. Extract the folder anywhere on your computer
4. Open `index.html` in your browser — done

**Option 2 — Clone with Git:**

```bash
git clone https://github.com/juanb-systems/test-listicle.git
cd test-listicle
# Open index.html in your browser
```

> No build step, no server, no dependencies to install. Works entirely in your browser.

---

## Features

### Design Presets
9 ready-to-use themes: **Dark Neon**, **Sunrise**, **Ocean**, **Forest**, **Minimal**, **Pastel**, **Bold Red**, **Purple Haze**, **Gold**

### Canvas Sizes
| Format | Dimensions |
|---|---|
| Square | 1080 × 1080 |
| Portrait | 1080 × 1350 |
| Story | 1080 × 1920 |
| Landscape | 1080 × 608 |
| Twitter | 1600 × 900 |
| FB Cover | 820 × 312 |
| Custom | Any size |

### Typography
- 8 Google Fonts — Inter, Poppins, Montserrat, Raleway, Playfair Display, Oswald, Nunito, Roboto
- Independent title and item font size & weight controls
- Letter spacing (Tight → Wider)
- **Text Effects** — Drop Shadow, Glow (accent-colored), Outline

### Background System
**Color & Gradient**
- Solid, Left→Right, Top→Bottom, Radial, and Diagonal gradients
- 6 independently adjustable color pickers (background, accent, title, item text, numbers, card)

**Patterns** — 11 royalty-free SVG geometric overlays (generated inline, zero external dependencies):
Dots · Grid · Diagonal Lines · Crosshatch · Hexagons · Topographic · Plus · Waves · Circuit · Triangles

**Photos** — 16 curated CC0 royalty-free photos via [picsum.photos](https://picsum.photos):
Mountain Fog · Ocean Waves · Dark Forest · Golden Hour · Misty Valley · Starry Night · City Lights · Neon City · Rooftop View · Rainy Window · Dark Texture · Marble · Ink Abstract · Cosmic · Bokeh · Tropical

**Custom** — paste any public image URL

**Overlay controls** — Opacity slider (0–100%) + 7 blend modes (Normal, Overlay, Soft Light, Multiply, Screen, Color Dodge, Luminosity)

### List Item Styles
- **Numbered** — large bold numbers
- **Bullet Points** — accent-colored dots
- **Emoji Prefix** — any emoji, fully customizable
- **Icon Badges** — rounded number badges
- **Card Style** — each item in its own card block

### Layout Controls
- Padding and gap sliders
- Title alignment (Left / Center / Right)
- Dividers toggle
- Watermark / handle overlay

### Carousel Mode
Click **Split to Carousel** to automatically break your list into slides:
- **Cover slide** — title + subtitle
- **Content slides** — configurable items per slide (1–8)
- **CTA slide** — save/follow call-to-action
- Progress dots on each slide
- Prev/Next navigation in the editor

### Export
| Format | Single | Carousel |
|---|---|---|
| **JPG** | Current slide | Current slide |
| **PNG** | Current slide | Current slide |
| **ZIP** | JPG + PNG pair | All slides as PNGs |

---

## File Structure

```
test-listicle/
├── index.html   # App shell and sidebar controls
├── style.css    # UI styles and canvas rendering styles
└── app.js       # Builder logic, design presets, patterns, export
```

---

## Credits

- **Photos** — [picsum.photos](https://picsum.photos) (Creative Commons Zero / Public Domain)
- **Fonts** — [Google Fonts](https://fonts.google.com) (Open Font License)
- **Export** — [html2canvas](https://html2canvas.hertzen.com) + [JSZip](https://stuk.github.io/jszip/)
