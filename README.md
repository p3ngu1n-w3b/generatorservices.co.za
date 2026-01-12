# Garden Route Generator Services

A clean, minimalistic website for Garden Route Generator Services - specializing in repairs, maintenance, support, and sales of generators of any size or make.

## Tech Stack

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

The production build will be in the `dist` directory, ready for deployment to Afrihost.

## Project Structure

```
src/
  components/
    Header.jsx      # Navigation header
    Hero.jsx        # Hero section
    Services.jsx    # Services grid
    Contact.jsx    # Contact information
    Footer.jsx      # Footer
  App.jsx           # Main app component
  main.jsx          # Entry point
  index.css         # Global styles with Tailwind
```

## Deployment

The project is configured for deployment to Afrihost. After building, upload the contents of the `dist` directory to your hosting.
