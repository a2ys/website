# Portfolio in Astro

This is my portfolio website built in Astro, with Tailwind CSS and TypeScript.

## Getting Started

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/a2ys/website.git
cd website
npm install
```

Then, start the development server:

```bash
npm run dev
```

## Building for Production

To build the site for production, run:

```bash
npm run build
```

This will generate a `dist` folder with the compiled site. You can run `npm run preview` to test the production build locally.

## Project Structure

The project is structured as follows:

- `public/`: Contains the static assets for the site.
- `src/`: Contains the source code for the site.
  - `components/`: Contains the components used in the site.
  - `layouts/`: Contains the layouts used in the site.
  - `pages/`: Contains the pages of the site.
- `.gitignore`: Specifies which files to ignore.
- `astro.config.mjs`: Configuration file for Astro.
- `package.json`: Contains the project's dependencies and scripts.
- `README.md`: The README file for the project.
- `tailwind.config.mjs`: Configuration file for Tailwind CSS.
- `tsconfig.json`: Configuration file for TypeScript.
