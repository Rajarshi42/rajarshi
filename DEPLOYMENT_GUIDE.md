# Deployment Guide

This guide covers multiple deployment options for your portfolio website.

## 🚀 Deployment Options

1. [Vercel](#vercel-recommended) - Easiest and fastest
2. [Netlify](#netlify) - Great for static sites
3. [GitHub Pages](#github-pages) - Free hosting
4. [Custom Server](#custom-server) - Full control

---

## Vercel (Recommended)

### Why Vercel?
- ✅ Automatic deployments from Git
- ✅ Free SSL certificate
- ✅ Global CDN
- ✅ Zero configuration
- ✅ Perfect for React apps

### Deployment Steps

#### Method 1: Using Vercel CLI

1. **Install Vercel CLI**
```bash
npm install -g vercel
```

2. **Login to Vercel**
```bash
vercel login
```

3. **Deploy**
```bash
cd portfolio-website
vercel
```

4. **Follow the prompts:**
   - Set up and deploy? `Y`
   - Which scope? Select your account
   - Link to existing project? `N`
   - What's your project's name? `penti-rajarshi-portfolio`
   - In which directory is your code located? `./`
   - Want to override the settings? `N`

5. **Production Deployment**
```bash
vercel --prod
```

#### Method 2: Using Vercel Dashboard

1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with GitHub
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: `Create React App`
   - Build Command: `npm run build`
   - Output Directory: `build`
6. Click "Deploy"

### Custom Domain (Optional)

1. Go to your project settings
2. Click "Domains"
3. Add your custom domain
4. Update DNS records as instructed

---

## Netlify

### Why Netlify?
- ✅ Drag-and-drop deployment
- ✅ Continuous deployment
- ✅ Free SSL
- ✅ Form handling
- ✅ Great for static sites

### Deployment Steps

#### Method 1: Drag and Drop

1. **Build your project**
```bash
npm run build
```

2. **Go to [netlify.com](https://netlify.com)**
3. Sign up/Login
4. Drag the `build` folder to the deployment area
5. Done! Your site is live

#### Method 2: Git Integration

1. **Push code to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

2. **Connect to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub
   - Select your repository
   - Configure:
     - Build command: `npm run build`
     - Publish directory: `build`
   - Click "Deploy site"

#### Method 3: Netlify CLI

1. **Install Netlify CLI**
```bash
npm install -g netlify-cli
```

2. **Login**
```bash
netlify login
```

3. **Initialize and Deploy**
```bash
netlify init
netlify deploy --prod
```

### Custom Domain

1. Go to "Domain settings"
2. Click "Add custom domain"
3. Follow DNS configuration instructions

---

## GitHub Pages

### Why GitHub Pages?
- ✅ Completely free
- ✅ Integrated with GitHub
- ✅ Easy to set up
- ✅ Good for personal projects

### Deployment Steps

1. **Install gh-pages**
```bash
npm install gh-pages --save-dev
```

2. **Update package.json**

Add these lines:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**
```bash
npm run deploy
```

4. **Enable GitHub Pages**
   - Go to your repository settings
   - Scroll to "GitHub Pages"
   - Source: `gh-pages` branch
   - Click Save

5. **Visit your site**
   - `https://yourusername.github.io/portfolio`

### Custom Domain

1. Add `CNAME` file in `public` folder:
```
yourdomain.com
```

2. Update DNS records:
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

---

## Custom Server

### Using Apache

1. **Build the project**
```bash
npm run build
```

2. **Upload build folder to server**
```bash
scp -r build/* user@yourserver.com:/var/www/html/
```

3. **Configure Apache**

Create `.htaccess` in root:
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Using Nginx

1. **Build and upload**
```bash
npm run build
scp -r build/* user@yourserver.com:/var/www/portfolio/
```

2. **Configure Nginx**

Edit `/etc/nginx/sites-available/portfolio`:
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

3. **Enable and restart**
```bash
sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

---

## Environment Variables

If you need environment variables:

### Create `.env` file
```env
REACT_APP_API_URL=https://api.example.com
REACT_APP_CONTACT_EMAIL=your@email.com
```

### Use in code
```javascript
const apiUrl = process.env.REACT_APP_API_URL;
```

### Set in Vercel
1. Go to project settings
2. Click "Environment Variables"
3. Add your variables

### Set in Netlify
1. Go to "Site settings"
2. Click "Build & deploy"
3. Click "Environment"
4. Add variables

---

## SSL Certificate (HTTPS)

### Vercel & Netlify
- Automatic SSL included ✅

### Custom Server with Let's Encrypt

```bash
sudo apt-get update
sudo apt-get install certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

## Performance Optimization

### Before Deployment

1. **Optimize Images**
```bash
npm install imagemin imagemin-webp
```

2. **Analyze Bundle Size**
```bash
npm install --save-dev webpack-bundle-analyzer
npm run build
```

3. **Enable Compression**

In `package.json`:
```json
"scripts": {
  "build": "GENERATE_SOURCEMAP=false react-scripts build"
}
```

### After Deployment

1. **Test Performance**
   - [Google PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

2. **Enable Caching**
   - Vercel/Netlify handle this automatically
   - For custom servers, configure cache headers

---

## Continuous Deployment

### Automatic Deployments

**Vercel/Netlify:**
- Push to `main` branch → Automatic deployment
- Push to other branches → Preview deployment

**GitHub Actions:**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Install and Build
        run: |
          npm install
          npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
```

---

## Monitoring

### Analytics

**Google Analytics:**

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `public/index.html`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Error Tracking

**Sentry:**

```bash
npm install @sentry/react
```

In `src/index.js`:
```javascript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "YOUR_SENTRY_DSN",
});
```

---

## Troubleshooting

### Build Fails

```bash
# Clear cache
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

### 404 on Refresh

**Solution:** Configure routing
- Vercel: Add `vercel.json`
- Netlify: Add `_redirects` file
- GitHub Pages: Use HashRouter

### Slow Loading

1. Check bundle size
2. Optimize images
3. Enable lazy loading
4. Use CDN

---

## Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Links working
- [ ] Images loading
- [ ] Forms submitting
- [ ] Mobile responsive
- [ ] SSL certificate active
- [ ] Custom domain configured
- [ ] Analytics tracking
- [ ] SEO meta tags present
- [ ] Social media previews working
- [ ] Performance score > 90

---

## Updating Your Site

### Vercel/Netlify
```bash
git add .
git commit -m "Update content"
git push
# Automatic deployment!
```

### GitHub Pages
```bash
npm run deploy
```

### Custom Server
```bash
npm run build
scp -r build/* user@server:/var/www/portfolio/
```

---

## Cost Comparison

| Platform | Free Tier | Custom Domain | SSL | Bandwidth |
|----------|-----------|---------------|-----|-----------|
| Vercel | ✅ Yes | ✅ Free | ✅ Free | 100GB/month |
| Netlify | ✅ Yes | ✅ Free | ✅ Free | 100GB/month |
| GitHub Pages | ✅ Yes | ✅ Free | ✅ Free | 100GB/month |
| Custom Server | ❌ No | Varies | Free (Let's Encrypt) | Unlimited |

---

## Recommended Setup

**For Beginners:** Vercel or Netlify
**For GitHub Users:** GitHub Pages
**For Full Control:** Custom Server

---

## Support

If you encounter issues:
1. Check deployment logs
2. Review build output
3. Test locally first
4. Check platform status pages
5. Contact platform support

---

Happy Deploying! 🚀
