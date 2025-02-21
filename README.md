# Modern Portfolio for Junior Developers

> **Note:** This project intentionally avoids advanced technologies and TypeScript to make it more accessible for junior developers. The focus is on creating a clean, professional portfolio using simple and straightforward technologies that are easier to understand and maintain.

A modern, responsive portfolio website built with Next.js 15, Tailwind CSS, and Framer Motion. Perfect for junior developers looking to showcase their work with a clean and professional design.

![Portfolio Preview](/project-preview.jpg)

## ✨ Features

- 🎨 Modern and clean design
- 📱 Fully responsive layout
- 🌓 Dark mode support
- 🎭 Smooth animations with Framer Motion
- 🎯 SEO optimized
- ⚡ Fast performance
- 📝 Easy to customize content via JSON
- 🎨 Tailwind CSS for styling
- 🖼️ Image optimization with Next.js
- 🧩 Modular component structure

## 🛠️ Built With

- [Next.js 15](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed on your machine
- npm, pnpm or yarn package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 🎨 Customization

### Personal Information
Edit `src/data/portfolio.json` to update:
- Personal details
- About section
- Skills
- Projects
- Contact information

### Styling
- Colors: Modify the color scheme in `tailwind.config.mjs`
- Typography: Update font styles in `src/app/globals.css`
- Components: Customize individual components in `src/components/`

### Images
1. Add your images to the `public` directory
2. Update image paths in `portfolio.json`
3. Optimize images for web use

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── components/       # React components
│   │   │   ├── Hero.jsx     # Hero section
│   │   │   ├── About.jsx    # About section
│   │   │   ├── Skills.jsx   # Skills section
│   │   │   └── Projects.jsx # Projects section
│   │   └── data/
│   │       └── portfolio.json # Portfolio content
│   ├── public/              # Static files
│   └── tailwind.config.mjs  # Tailwind configuration
└── package.json        # Project dependencies
```

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Mobile devices (320px and up)
- Tablets (768px and up)
- Desktops (1024px and up)
- Large screens (1280px and up)

## ⚡ Performance

- Optimized images with Next.js Image component
- Lazy loading of components
- Efficient animations with Framer Motion
- Minimal bundle size

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Images from [Unsplash](https://unsplash.com)
- Icons from [React Icons](https://react-icons.github.io/react-icons)
- Animation inspiration from [Framer Motion](https://www.framer.com/motion/)

## 📧 Contact

If you have any questions or suggestions, feel free to reach out:

- GitHub: [@Ramrachai](https://github.com/Ramrachai)
- LinkedIn: [Ramrachai](https://www.linkedin.com/in/ramrachai-m/)
- Email: ramrachaim@gmail.com

## ❓ Frequently Asked Questions

<details>
<summary><strong>How do I update my personal information?</strong></summary>

1. Navigate to `src/data/portfolio.json`
2. Update the `personalInfo` section with your details:
   ```json
   {
     "personalInfo": {
       "name": "Your Name",
       "title": "Your Title",
       "description": "Your Description",
       "location": "Your Location",
       "email": "your.email@example.com",
       "github": "https://github.com/yourusername",
       "linkedin": "https://linkedin.com/in/yourprofile"
     }
   }
   ```
</details>

<details>
<summary><strong>How do I add/remove skill categories?</strong></summary>

The skills section is completely dynamic. To add or remove skill categories:

1. Open `src/data/portfolio.json`
2. Under the `skills` object, add or remove categories:
   ```json
   {
     "skills": {
       "newCategory": ["Skill 1", "Skill 2", "Skill 3"],
       "anotherCategory": ["Skill A", "Skill B", "Skill C"]
     }
   }
   ```
The component will automatically adjust to display any number of categories.
</details>

<details>
<summary><strong>How do I add my profile picture?</strong></summary>

1. Add your photo to the `public` directory (e.g., `myphoto.jpg`)
2. Update the image path in `src/data/portfolio.json`:
   ```json
   {
     "about": {
       "image": "/myphoto.jpg"
     }
   }
   ```
Recommended image size: 400x500px or similar aspect ratio
</details>

<details>
<summary><strong>How do I add a new project?</strong></summary>

1. Open `src/data/portfolio.json`
2. Add a new project object to the `projects` array:
   ```json
   {
     "title": "Your Project Name",
     "description": "Project description",
     "technologies": ["Tech1", "Tech2", "Tech3"],
     "github": "https://github.com/yourusername/project",
     "live": "https://your-project-demo.com",
     "image": "/projects/your-project-image.jpg"
   }
   ```
3. Add the project image to `public/projects/` directory
</details>

<details>
<summary><strong>How do I customize the color scheme?</strong></summary>

1. Open `tailwind.config.mjs`
2. Modify the colors in the theme section:
   ```js
   theme: {
     extend: {
       colors: {
         // Add your custom colors here
         primary: colors.blue,
         secondary: colors.purple,
       }
     }
   }
   ```
3. Use these colors in components with Tailwind classes
</details>

<details>
<summary><strong>How do I deploy the portfolio?</strong></summary>

1. **Vercel (Recommended)**
   - Connect your GitHub repository to Vercel
   - Vercel will automatically deploy your portfolio
   - Updates are deployed automatically when you push changes

2. **GitHub Pages**
   - Update `next.config.mjs` for GitHub Pages
   - Run `npm run build`
   - Push the build folder to your repository

3. **Custom Domain**
   - Purchase a domain
   - Configure DNS settings
   - Add domain in your deployment platform

4. **Professional Deployment (Premium)**
   - Custom deployment to AWS or cPanel
   - Fully managed service with monitoring
   - Professional setup and maintenance
   - Contact [Ramrachai](mailto:ramrachaim@gmail.com) for pricing and details
   - Services include:
     - AWS Amplify setup
     - Auto scaling and load balancing
     - Auto deployment from GitHub
     - SSL certificate installation
     - Domain configuration
     - Performance optimization
     - 24/7 monitoring
</details>

<details>
<summary><strong>How do I add animations to new components?</strong></summary>

1. Import Framer Motion:
   ```jsx
   import { motion } from 'framer-motion';
   ```
2. Convert your component to use motion:
   ```jsx
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 0.8 }}
   >
     Your content
   </motion.div>
   ```
</details>


