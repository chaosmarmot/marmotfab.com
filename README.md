# MarmotFab Website

A modern, responsive website for MarmotFab, LLC - Engineering Solutions for Off-Road Platforms. Built with Next.js and Tailwind CSS, this site showcases our CAD-driven, precision-fit hardware designs for Toyota & Lexus vehicles.

## Features

- Responsive design optimized for all devices
- Modern UI with smooth transitions and animations
- Contact form for client inquiries
- Services showcase with pricing
- Custom domain deployment (marmotfab.com)

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## Development

1. Clone the repository:

   ```bash
   git clone git@github.com:chaosmarmot/marmotfab.com.git
   cd marmotfab.com
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site

## Deployment

The site is automatically deployed to GitHub Pages when changes are pushed to the main branch. The deployment process is handled by GitHub Actions and includes:

1. Building the Next.js application
2. Optimizing assets
3. Deploying to GitHub Pages
4. Configuring the custom domain (marmotfab.com)

To deploy manually:

```bash
npm run build
```

## Custom Domain Setup

The site is configured to use the custom domain marmotfab.com. This is handled by:

- CNAME file in the public directory
- DNS configuration at the domain registrar
- GitHub Pages custom domain settings

## License

All rights reserved. This codebase is proprietary and confidential.
