# Personal Portfolio

A modern, responsive personal portfolio website built with React and TypeScript.

## Features

- Multi-language support (English/French)
- Responsive design
- Dark/light theme support
- Interactive components
- Professional layout with sections for Hero, About, Experience, Skills, Education, and Contact

## Technologies Used

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - UI library
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```sh
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

The application will be available at `http://localhost:5173` (or the next available port).

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   └── ...             # Page-specific components
├── contexts/           # React contexts (Language, etc.)
├── data/               # Static data files
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── pages/              # Page components
```

## Deployment

This project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

The portfolio will be hosted on http://firminnganduli.detofaentreprise.com/.

### Build for Production

```sh
npm run build
```

The built files will be in the `dist/` directory.
