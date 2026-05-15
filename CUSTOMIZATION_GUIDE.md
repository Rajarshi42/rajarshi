# Portfolio Customization Guide

This guide will help you customize the portfolio website with your own information.

## 🎯 Quick Start Checklist

- [ ] Update personal information
- [ ] Add your projects
- [ ] Update work experience
- [ ] Modify skills
- [ ] Add your resume
- [ ] Update social media links
- [ ] Customize colors (optional)
- [ ] Add your own images (optional)

## 📝 Step-by-Step Customization

### 1. Personal Information

#### Hero Section (`src/components/Hero.jsx`)

**Line 56-58**: Update your name
```javascript
<motion.h1>
  Your Name Here
</motion.h1>
```

**Line 61-73**: Update typing animation roles
```javascript
<TypeAnimation
  sequence={[
    'Your Role 1',
    2000,
    'Your Role 2',
    2000,
    // Add more roles
  ]}
/>
```

**Line 76-80**: Update tagline
```javascript
<motion.p>
  Your personal tagline here
</motion.p>
```

**Line 100-120**: Update social media links
```javascript
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="mailto:your.email@example.com">
```

### 2. About Section (`src/components/About.jsx`)

**Line 18-21**: Update statistics
```javascript
const stats = [
  { label: 'Experience', value: '2+', suffix: 'Years' },
  { label: 'Projects', value: '15+', suffix: 'Completed' },
  // Modify as needed
];
```

**Line 56-58**: Update title
```javascript
<h3>
  Your Title & <span className="gradient-text">Specialization</span>
</h3>
```

**Line 61-75**: Update about text
```javascript
<p>
  Write about yourself, your experience, and what you do...
</p>
```

### 3. Skills Section (`src/components/Skills.jsx`)

**Line 10-17**: Update skills array
```javascript
const skills = [
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26', level: 95 },
  { name: 'Your Skill', icon: <YourIcon />, color: '#color', level: 85 },
  // Add or remove skills
];
```

**Line 95**: Update skill keywords
```javascript
{['Keyword 1', 'Keyword 2', 'Keyword 3'].map((keyword, index) => (
  // Your keywords here
))}
```

### 4. Experience Section (`src/components/Experience.jsx`)

**Line 10-40**: Update experience array
```javascript
const experiences = [
  {
    title: 'Your Job Title',
    company: 'Company Name',
    period: 'Start - End',
    icon: <FaCode />,
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
      // Add more
    ],
    color: '#6366f1',
  },
  // Add more experiences
];
```

### 5. Projects Section (`src/components/Projects.jsx`)

**Line 10-40**: Update projects array
```javascript
const projects = [
  {
    title: 'Project Name',
    description: 'Project description...',
    image: '🎨', // Emoji or you can use actual images
    tech: ['Tech1', 'Tech2', 'Tech3'],
    github: 'https://github.com/username/repo',
    demo: 'https://your-demo-link.com',
    gradient: 'from-blue-500 to-purple-500',
  },
  // Add more projects
];
```

### 6. Education Section (`src/components/Education.jsx`)

**Line 10-30**: Update education array
```javascript
const education = [
  {
    degree: 'Your Degree',
    field: 'Your Field',
    institution: 'Your Institution',
    period: 'Start - End',
    icon: <FaGraduationCap />,
    color: '#6366f1',
  },
  // Add more education
];
```

### 7. Interests Section (`src/components/Interests.jsx`)

**Line 10-16**: Update interests
```javascript
const interests = [
  { name: 'Your Interest', icon: <YourIcon />, color: '#6366f1' },
  // Add more interests
];
```

**Line 18-23**: Update languages
```javascript
const languages = [
  { name: 'Language', level: 'Proficiency Level' },
  // Add more languages
];
```

### 8. Contact Section (`src/components/Contact.jsx`)

**Line 30-55**: Update contact information
```javascript
const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'your.email@example.com',
    link: 'mailto:your.email@example.com',
    color: '#6366f1',
  },
  // Update all contact info
];
```

### 9. Footer Section (`src/components/Footer.jsx`)

**Line 30-32**: Update name
```javascript
<motion.div>
  Your Name
</motion.div>
```

**Line 40-60**: Update social links
```javascript
<a href="https://github.com/yourusername">
<a href="https://linkedin.com/in/yourusername">
<a href="mailto:your.email@example.com">
```

### 10. Meta Tags (`public/index.html`)

**Line 6-20**: Update SEO meta tags
```html
<meta name="description" content="Your description" />
<meta name="keywords" content="Your, Keywords, Here" />
<meta name="author" content="Your Name" />
<meta property="og:title" content="Your Name - Your Title" />
<title>Your Name - Your Title</title>
```

## 🎨 Color Customization

### Update Theme Colors (`tailwind.config.js`)

```javascript
colors: {
  primary: '#0B0B0B',      // Main background
  accent: '#6366f1',        // Primary accent (blue)
  accentPurple: '#a855f7',  // Secondary accent (purple)
}
```

### Popular Color Schemes

**Blue & Purple (Default)**
```javascript
accent: '#6366f1',
accentPurple: '#a855f7',
```

**Green & Teal**
```javascript
accent: '#10b981',
accentPurple: '#14b8a6',
```

**Orange & Red**
```javascript
accent: '#f97316',
accentPurple: '#ef4444',
```

**Pink & Rose**
```javascript
accent: '#ec4899',
accentPurple: '#f43f5e',
```

## 📸 Adding Images

### Replace Emoji with Real Images

In `src/components/Projects.jsx`:

```javascript
// Instead of:
image: '🎨',

// Use:
image: '/images/project1.png',

// Then in JSX:
<img src={project.image} alt={project.title} />
```

### Add Profile Picture

In `src/components/About.jsx`:

```javascript
// Replace the emoji section with:
<img 
  src="/images/profile.jpg" 
  alt="Your Name"
  className="w-full h-full object-cover rounded-xl"
/>
```

## 📄 Adding Your Resume

1. Add your resume PDF to `public/resume.pdf`
2. The download button in Hero section will automatically work
3. Or update the link in `src/components/Hero.jsx`:

```javascript
<a href="/path-to-your-resume.pdf" download>
  <button>Download Resume</button>
</a>
```

## 🚀 Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Lazy Loading**: Images load as needed
3. **Code Splitting**: React handles this automatically
4. **Minimize Dependencies**: Only use what you need

## 🔧 Advanced Customization

### Add New Sections

1. Create new component in `src/components/YourSection.jsx`
2. Import in `src/App.js`
3. Add to the component tree
4. Update navbar in `src/components/Navbar.jsx`

### Modify Animations

All animations use Framer Motion. Customize in each component:

```javascript
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }, // Adjust duration
  },
};
```

### Change Fonts

Update in `src/index.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

## 📱 Testing Responsiveness

1. Open browser DevTools (F12)
2. Click device toolbar icon
3. Test on different screen sizes:
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1440px, 1920px

## ✅ Pre-Launch Checklist

- [ ] All personal information updated
- [ ] All links working (test each one)
- [ ] Resume file added and downloadable
- [ ] Contact form tested
- [ ] Responsive on all devices
- [ ] No console errors
- [ ] Fast loading time
- [ ] SEO meta tags updated
- [ ] Favicon updated
- [ ] Social media preview working

## 🆘 Common Issues

### Issue: Animations not working
**Solution**: Check if Framer Motion is installed: `npm install framer-motion`

### Issue: Tailwind classes not applying
**Solution**: Restart dev server: `npm start`

### Issue: Icons not showing
**Solution**: Check if react-icons is installed: `npm install react-icons`

### Issue: Build errors
**Solution**: Clear cache and rebuild:
```bash
rm -rf node_modules
npm install
npm run build
```

## 📞 Need Help?

If you encounter any issues:
1. Check the console for errors (F12)
2. Review this guide
3. Check the README.md
4. Search for the error online
5. Create an issue on GitHub

---

Happy Customizing! 🎉
