# Card Basement

A modern static site for displaying card collections, built with Vite, React, TanStack Router, and Jotai, deployed on Cloudflare Pages.

## Tech Stack

- **Vite** - Fast build tool and dev server
- **React** - UI library
- **TypeScript** - Type safety
- **TanStack Router** - Type-safe file-based routing
- **Jotai** - Atomic state management
- **Cloudflare Pages** - Hosting and deployment

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Cloudflare Pages Deployment

### Using Wrangler CLI

1. Login to Cloudflare:

```bash
npx wrangler login
```

2. Deploy to Cloudflare Pages:

```bash
npx wrangler pages deploy dist
```

### Using Cloudflare Dashboard

1. Push your code to GitHub
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to Pages
4. Click "Create a project"
5. Connect your GitHub repository
6. Configure build settings:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Framework preset**: Vite
7. Click "Save and Deploy"

## Project Structure

```
card-basement/
├── public/          # Static assets
├── src/
│   ├── routes/      # TanStack Router file-based routes
│   │   ├── __root.tsx
│   │   ├── index.tsx
│   │   ├── gallery.tsx
│   │   └── about.tsx
│   ├── store.ts     # Jotai atoms for state management
│   ├── main.tsx     # App entry point
│   ├── App.css      # Component styles
│   └── index.css    # Global styles
├── wrangler.toml    # Cloudflare configuration
└── vite.config.ts   # Vite configuration
```

## Adding Your Cards

1. Add your card images to the `/public` folder
2. Update the card data in `src/store.ts`
3. The gallery will automatically display your cards with search functionality

## Features

- ⚡️ Lightning-fast development with Vite
- 🎯 Type-safe routing with TanStack Router
- 🔄 Atomic state management with Jotai
- 🎨 Responsive design with CSS
- 🚀 Optimized for Cloudflare Pages
- 🔍 Built-in search functionality
- 🎨 Dark mode ready

## License

MIT
