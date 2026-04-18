# Nexpixelo — Digital Creativity Agency

A premium, neobrutalist agency website built with **Next.js 15**, **Sanity CMS**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Technology Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **CMS:** [Sanity.io](https://www.sanity.io/) (Headless CMS)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons & Images:** Sanity Image URL Builder & Next.js Image optimization

## ✨ Key Features

- **Neobrutalist Design:** Premium aesthetic with bold typography, custom pastel palettes, and sharp shadows.
- **Fully Responsive:** Optimized for all devices from mobile to large desktops.
- **Dynamic Content:** All sections (Hero, About, Services, Projects, Testimonials, News) are editable via Sanity CMS.
- **Smart Navigation:** Sticky navbar that hides on scroll down and reveals on scroll up for better UX.
- **Smooth Scrolling:** Integrated anchor navigation with a smooth feel.
- **Infinite Marquee:** High-performance marquee sections for testimonials and project lists.

## 🛠️ Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Environment Variables
Create a `.env.local` file and add your Sanity credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_token
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the result.

## 📝 Content Management

To edit the website content, log in to your Sanity Studio:
```bash
# Usually accessible via /studio route or a separate deployment
npx sanity start
```

## 📜 License

© 2026 Nexpixelo. All Rights Reserved.
