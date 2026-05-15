# Penti Rajarshi - Portfolio Website

A modern, premium, and highly interactive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Cinematic Animations**: Smooth, buttery animations using Framer Motion
- **Dark Theme**: Premium dark theme with glassmorphism effects
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: 
  - Magnetic hover effects on buttons
  - Card tilt animations
  - Floating gradient blobs
  - Custom animated cursor
  - Typing animation in hero section
  - Smooth scroll animations
- **Modern UI/UX**: Clean, minimal, and professional design
- **SEO Optimized**: Meta tags and semantic HTML
- **Performance Optimized**: Fast loading and smooth interactions

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **React Type Animation** - Typing animation
- **React Scroll** - Smooth scrolling

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/pentirajarshi/portfolio.git
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start

$env:PORT=3002; npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## 📁 Project Structure

```
portfolio-website/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Loader.jsx
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Projects.jsx
│   │   ├── Education.jsx
│   │   ├── Interests.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Contact Information**: Update email, phone, and social links in:
   - `src/components/Hero.jsx`
   - `src/components/Contact.jsx`
   - `src/components/Footer.jsx`

2. **Projects**: Add your projects in `src/components/Projects.jsx`

3. **Experience**: Update work experience in `src/components/Experience.jsx`

4. **Skills**: Modify skills in `src/components/Skills.jsx`

5. **Education**: Update education details in `src/components/Education.jsx`

### Color Scheme

Colors can be customized in `tailwind.config.js`:
```javascript
colors: {
  primary: '#0B0B0B',
  accent: '#6366f1',
  accentPurple: '#a855f7',
}
```

## 📱 Sections

1. **Hero** - Landing section with animated typing text
2. **About** - Introduction and statistics
3. **Skills** - Technical skills with progress bars
4. **Experience** - Work experience timeline
5. **Projects** - Project showcase with live demos
6. **Education** - Academic qualifications
7. **Interests & Languages** - Personal interests and languages
8. **Contact** - Contact form and information
9. **Footer** - Social links and copyright

## 🌟 Key Features Explained

### Animations
- **Framer Motion** powers all animations
- Stagger animations for sequential reveals
- Scroll-triggered animations using `useInView`
- Hover effects on cards and buttons
- Custom cursor with smooth following

### Glassmorphism
- Transparent backgrounds with blur effects
- Subtle borders for depth
- Applied to cards, navbar, and buttons

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Hamburger menu for mobile navigation

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the build folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm install gh-pages --save-dev
# Add to package.json:
# "homepage": "https://pentirajarshi.github.io/portfolio"
# "predeploy": "npm run build"
# "deploy": "gh-pages -d build"
npm run deploy
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Penti Rajarshi**
- GitHub: [@pentirajarshi](https://github.com/pentirajarshi)
- LinkedIn: [pentirajarshi](https://linkedin.com/in/pentirajarshi)
- Email: pentirajarshi@example.com

## 🙏 Acknowledgments

- Design inspiration from Awwwards
- Icons from React Icons
- Animations powered by Framer Motion
- Built with React and Tailwind CSS

---

Made with ❤️ by Penti Rajarshi
