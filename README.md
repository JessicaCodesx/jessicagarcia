# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Vite. Features smooth animations, a clean design, and multiple pages showcasing projects, academics, and contact information.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **Lucide React** - Icons

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/jessicagarcia.git
cd jessicagarcia
```

2. Install dependencies:
```bash
npm install
```

## Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

Other available commands:
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions.

### How it works:

1. **Source Branch**: `main` - Contains the source code
2. **Deployment Branch**: `gh-pages` - Contains the built static files
3. **Automated Workflow**: When you push to `main`, GitHub Actions automatically:
   - Builds the project
   - Deploys the `dist` folder to the `gh-pages` branch
   - Updates the live site

### Manual Deployment (if needed):

If you need to deploy manually, you can use:
```bash
npm run deploy
```

This will build the project and push the `dist` folder to the `gh-pages` branch.

### GitHub Pages Configuration:

Ensure your repository settings are configured:
- Go to **Settings** → **Pages**
- Set **Source** to "Deploy from a branch"
- Select `gh-pages` branch and `/ (root)` folder

## Project Structure

```
├── src/
│   ├── components/     # Reusable React components
│   ├── pages/          # Page components
│   ├── assets/         # Static assets
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── public/             # Public assets
├── dist/               # Build output (generated)
└── .github/
    └── workflows/      # GitHub Actions workflows
```

## Features

- Responsive design for all screen sizes
- Smooth page transitions with Framer Motion
- Multiple pages: Home, About, Academics, Projects, Contact
- Modern UI with Tailwind CSS
- Fast development experience with Vite HMR

## License

This project is private and personal.
