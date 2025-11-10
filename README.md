# 🚀 Modern Portfolio Website

A beautiful, modern portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🎨 Modern, elegant design with smooth animations
- 🌙 Dark theme with gradient accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Fast performance with Vite
- 🎭 Smooth page transitions and scroll animations
- 💼 Dynamic sections: Hero, About, Experience, Education, Projects, Contact
- 🎯 SEO-friendly and accessible

## 🚀 Quick Start

```powershell
# Install dependencies
cd "C:\Users\Majid Kouki\OneDrive\Bureau\portfolio"
npm install

# Start development server
npm run dev
```

Visit **http://localhost:5174/** in your browser.

## 📦 Build for Production

```powershell
# Build the project
npm run build

# Preview production build
npm run preview

# Type check
npm run check
```

## 🎨 Customization

### Add Your Assets
See `ASSETS_SETUP.md` for detailed instructions.

**Required files in `public/assets/`:**
- `profile.jpg` - Your profile photo (800x800px recommended)
- `cv.pdf` - Your CV/resume PDF
- `logo.svg` - Your logo (already created, but you can replace it)

### Update Content
All your information is centralized in:
- `src/data/resume.ts` - Your personal info, experience, education, skills
- `src/data/projects.ts` - Your projects with descriptions and links

## 🛠️ Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **React Icons** - Icon library

## 📁 Project Structure

```
portfolio/
├── public/
│   └── assets/          # Static assets (logo, profile, CV)
├── src/
│   ├── components/      # React components
│   ├── data/           # Resume and project data
│   ├── styles/         # Global styles
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.cjs # Tailwind configuration
└── vite.config.ts      # Vite configuration
```

## 🚀 Deploying

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel auto-detects Vite settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy!

### Netlify
1. Push to GitHub
2. Connect to Netlify
3. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📝 Contact Form

The contact form uses a mailto link by default. For a backend solution:
- Add EmailJS credentials in `src/components/Contact.tsx`
- Or integrate with Formspree, Netlify Forms, or your own API

## 📄 License

© 2025 Sameh Abdelmajid Kouki. All rights reserved.

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
