# Chicken Extension App

Welcome to the **Chicken Extension** web application repository. This is an authentic Mughlai Kitchen ordering and showcase website built using modern web technologies.

## Tech Stack
- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: Vanilla CSS (`globals.css`) with highly customized, premium design tokens
- **Typography**: Optimized loading of Google Fonts (`Playfair Display`, `Pinyon Script`, and `Poppins`)

## Features
- **Premium Hero Section**: Features an elegant vintage paper background, seamlessly blended logo, and custom typography to highlight the Authentic Mughlai Experience.
- **Direct Ordering**: Seamlessly order directly via WhatsApp or call, or jump to delivery apps like Swiggy and Zomato.
- **Responsive Layout**: Adapts gracefully to all screen sizes, optimizing visual hierarchy on mobile devices.
- **Micro-interactions**: Enhanced UI components with subtle transitions and rich text-shadows for maximum visual appeal.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure
- `src/app/page.tsx`: The main landing page component containing the hero section, navigation, and core layout structure.
- `src/app/globals.css`: Global styles including CSS variables for the color palette, typography styles, and media queries.
- `src/app/layout.tsx`: The root layout integrating the fonts and global styles.
- `public/`: Contains static assets like the processed transparent logo and custom generated background imagery.
