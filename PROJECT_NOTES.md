# Jeramie Hicks Resume Website - Project Notes

## Project Location
`/Users/jeramiehicks/.gemini/antigravity/scratch/jeramie-hicks-resume`

## Current Status
**Running on:** http://localhost:8080 (Python HTTP server)

## Tech Stack
- Pure HTML/CSS/JS (no framework)
- Google Fonts: Bebas Neue, Montserrat, JetBrains Mono
- Font Awesome icons
- Particle canvas background with animated mesh

## Files
- `index.html` - Main resume page (419 lines)
- `styles.css` - Full styling (~20KB)
- `scripts.js` - Interactivity, animations, AI chat (~18KB)
- `assets/images/` - Project screenshots
- `netlify.toml` - Netlify deployment config
- `_headers` - Security headers for deployment
- `README.md` - Project documentation

## Site Sections
1. **Hero** - "WEAPONIZE YOUR DATA" headline, status badge, location (Benton Harbor, MI)
2. **Builds** - NEURUH agent swarm, ARB-BOT arbitrage system
3. **Visual Showcase** - 4 project images (neuruh-prime, neuruh-all, neuruh-recursive, opus-singularity)
4. **Stack** - Engineering, AI Ops, Business OS skill cards
5. **AI Chat** - Interactive Q&A section
6. **Contact** - GitHub, LinkedIn, X, YouTube links + phone (269-500-1768)

## Social Links
- GitHub: github.com/yousernamehere (placeholder - needs real username)
- LinkedIn: linkedin.com/in/jeramieshicks
- X/Twitter: x.com/JeramieHicks
- YouTube: youtube.com/@Neuruh
- Email: Jeramieshicks@gmail.com
- Phone: 269-500-1768

---

## KNOWN ISSUES / TODO

### 1. Resume PDF Missing ❌
- Nav button links to `Jeramie_Hicks_Resume.pdf` but file doesn't exist
- **ACTION NEEDED:** User needs to provide PDF file location

### 2. No Prominent "Get Resume" CTA ❌
- Only small button in nav bar
- Should add prominent download button in hero section

### 3. More Projects Needed ❌
- Currently only shows NEURUH and ARB-BOT
- **ACTION NEEDED:** User needs to provide details on other projects they've built
  - Project names
  - What they do
  - Tech used
  - Metrics/results

### 4. GitHub Username
- Currently placeholder "yousernamehere" - needs real GitHub username

---

## Design Theme
- Dark mode with blue accent (#00a2ff / var(--phorm-blue))
- Military/operator aesthetic
- HUD-style corners and status badges
- Glass-morphism cards
- Particle background animation
- Scroll-triggered animations

## Running the Dev Server
```bash
cd /Users/jeramiehicks/.gemini/antigravity/scratch/jeramie-hicks-resume
python3 -m http.server 8080
```

## Deployment Ready
- Netlify config included
- Security headers configured
- Ready to deploy once content is finalized
