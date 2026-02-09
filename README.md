# Jeramie Hicks - AI Engineer Portfolio

A premium, 1st Phorm-branded interactive resume with AI-powered chat functionality.

## Features

- **1st Phorm Brand Aesthetic**: Persian Blue (#1033CF) with red accents
- **Interactive AI Chat**: Ask questions about experience, skills, and projects
- **Animated Background**: Particle system with connection lines
- **Glassmorphism Design**: Premium glass card effects with depth
- **Responsive**: Works on desktop, tablet, and mobile
- **Accessible**: ARIA labels, focus states, reduced-motion support

## Tech Stack

- Vanilla HTML/CSS/JavaScript
- Gemini API for AI chat (optional)
- No build step required

## Quick Start

```bash
# Serve locally
python3 -m http.server 8080

# Open browser
open http://localhost:8080
```

## Deployment

### Netlify (Recommended)

1. Drag and drop the project folder to [Netlify Drop](https://app.netlify.com/drop)
2. Or connect via GitHub for automatic deployments

### Custom Domain

Add your domain in Netlify settings and update DNS:
```
A Record: @ -> 75.2.60.5
CNAME: www -> your-site.netlify.app
```

## AI Chat Configuration

To enable live AI responses, add your Gemini API key:

1. Open `scripts.js`
2. Set `CONFIG.GEMINI_API_KEY = 'your-key-here'`
3. Or use environment variables in production

Without an API key, the chat uses intelligent mock responses.

## Project Structure

```
├── index.html          # Main page
├── styles.css          # All styles
├── scripts.js          # JavaScript + AI chat
├── assets/
│   └── images/         # Project screenshots
├── netlify.toml        # Deployment config
├── _headers            # Security headers
└── README.md
```

## Contact

- **Email**: Jeramieshicks@gmail.com
- **Phone**: 269-500-1768
- **LinkedIn**: /in/jeramieshicks
- **GitHub**: /yousernamehere

---

*"Personal Excellence is the Ultimate Rebellion"*
