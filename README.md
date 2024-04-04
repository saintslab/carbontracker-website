# Carbontracker home page
This is the code for [carbontracker.github.io](carbontracker.github.io), which serves as a [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization)-friendly, shareable landing page for the Carbontracker project.
It is built using [Next.js](https://nextjs.org/), which is a framework for [React](https://react.dev/), which is a modern frontend web development framework.
Next.js is set up to export to static HTML files, which is servable by Github Pages.

The project is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app), and uses [Chakra UI](https://chakra-ui.com/) for visual components.

## Getting Started

Install Node.js version 20.10 or later.
Clone the project, then run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Github Pages

All pushes to `main` are automatically built and deployed on [snailed.github.io/carbontracker-website](https://snailed.github.io/carbontracker-website/) and [carbontracker.info](carbontracker.info).
You can inspect a production build by running `npm run build`, `cd out`, `python -m http.server` and then visiting `localhost:8000`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [React.js Documentation](https://react.dev/)
- [Chakra UI Documentation](https://chakra-ui.com/)


