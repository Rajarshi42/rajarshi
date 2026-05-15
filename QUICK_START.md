# 🚀 Quick Start Guide

Get your portfolio website up and running in 5 minutes!

## ✅ Prerequisites

Make sure you have installed:
- **Node.js** (v14 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

Check your versions:
```bash
node --version
npm --version
```

## 📦 Installation

The project is already set up with all dependencies installed. If you need to reinstall:

```bash
cd portfolio-website
npm install
```

## 🎬 Start Development Server

```bash
npm start
```

This will:
- Start the development server
- Open your browser automatically at `http://localhost:3000`
- Enable hot-reload (changes appear instantly)

## 🎨 Customize Your Portfolio

### Step 1: Update Personal Information (5 minutes)

1. **Open `src/components/Hero.jsx`**
   - Change your name (line 56)
   - Update roles in typing animation (line 61-73)
   - Update social media links (line 100-120)

2. **Open `src/components/About.jsx`**
   - Update about text (line 61-75)
   - Modify statistics (line 18-21)

3. **Open `src/components/Contact.jsx`**
   - Update email, phone, LinkedIn, GitHub (line 30-55)

### Step 2: Add Your Projects (3 minutes)

**Open `src/components/Projects.jsx`** (line 10-40)

```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Brief description...',
    image: '🎨', // Use emoji or image path
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo.com',
    gradient: 'from-blue-500 to-purple-500',
  },
  // Add more projects...
];
```

### Step 3: Update Experience (2 minutes)

**Open `src/components/Experience.jsx`** (line 10-40)

Update with your work experience.

### Step 4: Modify Skills (2 minutes)

**Open `src/components/Skills.jsx`** (line 10-17)

Add or remove skills as needed.

## 🏗️ Build for Production

When you're ready to deploy:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 🚀 Deploy Your Website

### Option 1: Vercel (Recommended - Easiest)

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts and you're live!

### Option 2: Netlify (Drag & Drop)

1. Run `npm run build`
2. Go to [netlify.com](https://netlify.com)
3. Drag the `build` folder to deploy
4. Done!

### Option 3: GitHub Pages

1. Update `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio"
```

2. Install gh-pages:
```bash
npm install gh-pages --save-dev
```

3. Add to scripts in `package.json`:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d build"
```

4. Deploy:
```bash
npm run deploy
```

## 📝 Essential Files to Customize

| File | What to Update | Priority |
|------|---------------|----------|
| `src/components/Hero.jsx` | Name, roles, social links | ⭐⭐⭐ |
| `src/components/About.jsx` | About text, stats | ⭐⭐⭐ |
| `src/components/Contact.jsx` | Contact info | ⭐⭐⭐ |
| `src/components/Projects.jsx` | Your projects | ⭐⭐⭐ |
| `src/components/Experience.jsx` | Work experience | ⭐⭐ |
| `src/components/Skills.jsx` | Technical skills | ⭐⭐ |
| `src/components/Education.jsx` | Education details | ⭐⭐ |
| `src/components/Interests.jsx` | Hobbies, languages | ⭐ |
| `public/index.html` | SEO meta tags | ⭐ |

## 🎨 Change Colors

**Edit `tailwind.config.js`:**

```javascript
colors: {
  primary: '#0B0B0B',      // Background
  accent: '#6366f1',        // Primary color (blue)
  accentPurple: '#a855f7',  // Secondary color (purple)
}
```

Popular color schemes:
- **Blue/Purple** (default): `#6366f1` / `#a855f7`
- **Green/Teal**: `#10b981` / `#14b8a6`
- **Orange/Red**: `#f97316` / `#ef4444`
- **Pink/Rose**: `#ec4899` / `#f43f5e`

## 📱 Test Responsiveness

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test different screen sizes

## ⚡ Performance Tips

1. **Optimize images**: Use WebP format
2. **Compress files**: Images should be < 200KB
3. **Test speed**: Use [PageSpeed Insights](https://pagespeed.web.dev/)

## 🐛 Common Issues & Solutions

### Issue: Port 3000 already in use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:3000 | xargs kill
```

### Issue: npm install fails
```bash
# Clear cache and reinstall
rm -rf node_modules
rm package-lock.json
npm cache clean --force
npm install
```

### Issue: Build fails
```bash
# Check for errors
npm run build

# If errors persist, check:
# 1. All imports are correct
# 2. No syntax errors
# 3. All dependencies installed
```

### Issue: Animations not working
- Make sure Framer Motion is installed: `npm install framer-motion`
- Restart dev server: `npm start`

### Issue: Tailwind classes not applying
- Restart dev server
- Check `tailwind.config.js` content paths
- Clear browser cache

## 📚 Additional Resources

- **Full Customization Guide**: See `CUSTOMIZATION_GUIDE.md`
- **Deployment Guide**: See `DEPLOYMENT_GUIDE.md`
- **README**: See `README.md`

## 🎯 Checklist Before Going Live

- [ ] Updated all personal information
- [ ] Added real projects with working links
- [ ] Updated work experience
- [ ] Modified skills to match yours
- [ ] Changed contact information
- [ ] Added resume file (optional)
- [ ] Updated SEO meta tags
- [ ] Tested on mobile devices
- [ ] Checked all links work
- [ ] Tested contact form
- [ ] Optimized images
- [ ] Ran `npm run build` successfully

## 🆘 Need Help?

1. Check console for errors (F12)
2. Review the guides in this project
3. Search the error message online
4. Check React documentation
5. Check Framer Motion docs

## 🎉 You're Ready!

Your portfolio is now ready to impress recruiters and showcase your work!

**Next Steps:**
1. Customize the content (30 minutes)
2. Test everything (10 minutes)
3. Deploy to Vercel/Netlify (5 minutes)
4. Share your portfolio link!

---

**Pro Tips:**
- Keep content concise and impactful
- Use high-quality project screenshots
- Update regularly with new projects
- Share on LinkedIn and GitHub
- Ask for feedback from peers

Good luck! 🚀
