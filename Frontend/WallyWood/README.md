# Wallywood Frontend

A modern React-based poster shop application built with TypeScript and Vite.

## Technologies Used

### Core
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server

### Routing & State
- **React Router DOM** - Client-side routing and navigation

### Styling
- **SCSS Modules** - Component-scoped styling with CSS preprocessor

### UI Components & Libraries
- **React Icons** - Icon library (Font Awesome, Bootstrap Icons)
- **React Paginate** - Pagination component
- **html-react-parser** - Safely parse and render HTML content from API

### Development Tools
- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting rules

## Features
- Browse posters with genre filtering
- Sort by price (ascending/descending) or name
- Pagination for poster listings
- Detailed poster view with purchase options
- Responsive navigation with active route highlighting
- Dynamic content loading from REST API

## Known Issues
- No login functionality
- No cart functionality

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
