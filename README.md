# Psychology Portfolio Website

A modern, beautiful portfolio website built for psychology students and professionals. Features a sleek neumorphic design with a maintainable, scalable structure.

## 🎨 Features

- **Neumorphic Design**: Soft shadow-based UI inspired by modern design trends
- **Responsive Layout**: Mobile-first design that works on all devices
- **TypeScript**: Full type safety throughout the codebase
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Component Architecture**: Organized, reusable components
- **SEO Optimized**: Next.js built-in optimizations
- **Fast Performance**: Next.js optimizations and image handling
- **Content Management**: Markdown-based content for projects, research, and blog posts

## 🚀 Quick Start

### Prerequisites
- Node.js 18.17 or later
- npm, yarn, pnpm, or bun package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open [http://localhost:3000](http://localhost:3000) in your browser
```

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (sections)/        # Route groups for pages
│   │   │   ├── about/
│   │   │   ├── research/
│   │   │   ├── projects/
│   │   │   ├── blog/
│   │   │   └── contact/
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   │
│   ├── components/            # React components
│   │   ├── layout/            # Layout components (Header, Footer, etc.)
│   │   ├── common/            # Reusable components (Button, Card, etc.)
│   │   ├── sections/          # Page section components
│   │   └── ui/                # UI primitives
│   │
│   ├── styles/                # Global styles
│   │   └── globals.css        # Global Tailwind styles
│   │
│   ├── lib/                   # Utilities and helpers
│   │   ├── utils/             # Helper functions
│   │   ├── constants/         # App constants
│   │   └── types/             # TypeScript types and interfaces
│   │
│   └── content/               # Markdown content
│       ├── projects/
│       ├── research/
│       └── blog/
│
├── public/                    # Static assets
│   ├── images/
│   │   ├── projects/
│   │   └── research/
│   └── icons/
│
├── .github/                   # GitHub specific files
├── .vscode/                   # VS Code settings
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
├── postcss.config.js
└── .eslintrc.json
```

### Directory Explanations

- **`src/app`**: Next.js 13+ App Router directory. Routes are automatically created based on folder structure
- **`src/components`**: All React components organized by type
  - `layout/`: Components that wrap pages (Header, Navigation, Footer)
  - `common/`: Reusable components used across pages
  - `sections/`: Components specific to different page sections
  - `ui/`: Low-level UI components (Button, Input, Card)
- **`src/lib`**: Non-React utilities, constants, and type definitions
- **`src/content`**: Markdown files for blog posts, projects, and research
- **`public`**: Static files served directly (images, icons, fonts)

## 💡 Key Technologies

| Technology | Purpose |
|-----------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling with neumorphic theme |
| **React 18** | UI library |
| **ESLint** | Code quality |

## 🎯 Development Guidelines

### Component Naming
- Use PascalCase for component files: `Button.tsx`, `HeroSection.tsx`
- Use kebab-case for utility files: `cn.ts`, `format-date.ts`

### File Organization
- Keep related files together
- One component per file (unless they're tightly coupled)
- Export types alongside their implementations

### Styling
- Use Tailwind classes first
- Add custom CSS only when necessary in `src/styles/globals.css`
- Extend Tailwind config in `tailwind.config.ts` for project-specific utilities

### Example Component Structure

```tsx
// src/components/ui/Button.tsx
import { ReactNode } from 'react'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
}: ButtonProps) {
  const baseStyles = 'font-semibold transition-smooth'
  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700',
    secondary: 'bg-secondary-500 text-white hover:bg-secondary-600',
  }
  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} shadow-neumorphic rounded-lg`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
```

## 🔧 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 Customization

### Adding New Pages

1. Create a new folder under `src/app/(sections)/`
2. Add `page.tsx` file
3. Create components in `src/components/sections/` if needed

### Managing Content

Place markdown files in `src/content/` directories and import them where needed.

### Theming

Modify `tailwind.config.ts` to customize:
- Colors (neumorphic theme colors)
- Shadows (neumorphic shadow definitions)
- Fonts and spacing
- Responsive breakpoints

## 📚 Best Practices

- ✅ Use TypeScript for all code
- ✅ Keep components small and focused
- ✅ Use Tailwind classes for styling
- ✅ Organize imports (React, Next, third-party, relative)
- ✅ Add proper type definitions in `src/lib/types/`
- ✅ Use constants from `src/lib/constants/`

## 🚀 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

Build the project and deploy the out directory or use Docker

## 📄 License

MIT - Feel free to use this project for personal or commercial purposes.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Happy coding!** 🎉
