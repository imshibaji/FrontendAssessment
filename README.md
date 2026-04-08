# 🚀 London Workspace Finder (InnateAI)

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen?style=for-the-badge)](https://london-workspace-finder.vercel.app)
[![GitHub](https://img.shields.io/badge/github-repo-black?style=for-the-badge&logo=github)](https://github.com/imshibaji/FrontendAssessment)

A high-performance, SEO-optimized directory for serviced offices and coworking spaces in London. Built with **Next.js 16**, **Tailwind CSS**, and **TypeScript**.

## 🌟 Key Features

- **Server-Side Search & Filtering:** Real-time filtering by office type, area, budget, and desk capacity using URL Search Parameters.

- **Dynamic Metadata:** Automated SEO titles and descriptions for every listing to improve search rankings.

- **JSON-LD Structured Data:** Integrated Schema.org "Product" markup for rich search results.

- **Glassmorphic UI:** Premium hero section and interactive listing cards with dark mode support.

- **Performance First:** Zero-bundle-size data fetching via React Server Components.

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router)

- **Styling:** Tailwind CSS (with Glassmorphism)

- **Language:** TypeScript

- **State Management:** URL State via next/navigation

- **Data Source:** Local JSON (Scalable to CMS/API)

### 🚀 Getting Started

**1. Prerequisites**

- Node.js 20.x or later

- npm or pnpm

**2. Installation
Bash**

```bash
# Clone the repository
git clone https://github.com/imshibaji/FrontendAssessment.git

# Enter the project directory
cd FrontendAssessment

# Install dependencies
npm install
```

**3. Development
Bash**

```bash
npm run dev
```

Open <http://localhost:3000> to view the result.

---

### 📂 Project Architecture

```Plaintext
root/
├── app/
|   ├── page.tsx            # Main page (Server Component)
│   ├── layout.tsx          # Root layout with global metadata
│   ├── workspaces/
│   │   ├── page.tsx        # Another listing page (Server Component)
│   │   └── [id]/
│   │       ├── Components  # Dynamic listing page components (Server Component)
│   │       │   ├── Image.tsx    # Dynamic image component
│   │       │   ├── PriceCard.tsx # Dynamic price card component
│   │       │   └── PriceDetails.tsx   # Dynamic price details component
│   │       │   └── SpaceDetails.tsx   # Dynamic space details component
│   │       └── page.tsx    # Individual details & Dynamic SEO
|   ├── components/
│   │   ├── Badges.tsx          # Dynamic badge component
│   │   ├── ContactCard.tsx     # Premium UI card component
│   │   ├── Header.tsx          # Hero section with glassmorphism
│   │   ├── Conversion.tsx      # Conversion block
│   │   ├── Faqs.tsx            # FAQ section
│   |   ├── Filters.tsx         # Listing filters
│   │   ├── WorkspaceCard.tsx   # Premium UI card component Client-side filtering logic
│   └── data/              
|       └── listings.json       # Mock database of office listings
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json

```

### 📖 Learning for Developers

Async Params in Next.js 16
In this version, params and searchParams are Promises. You must unwrap them before use:

```TypeScript
export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params; // Crucial for Next.js 16
}
```

#### Data Fetching

We utilize React Server Components. Data is read from the filesystem on the server, ensuring that no sensitive logic or large JSON files are sent to the client’s browser.

##### SEO Strategy

Every sub-page uses `generateMetadata()` to create unique `<title>` and `<meta>` tags. I also inject a `<script type="application/ld+json">` to help Google understand pricing and location data.

## 🎯 Product & UX Decisions

This submission was built with a "Conversion-First" mindset, specifically designed to replace legacy systems with a modern, high-performing frontend.

### 🔍 Search & SEO Strategy

- **Real-time Search:** The client can filter by office type, area, budget, and desk capacity, allowing users to find the perfect workspace for their needs.
- **Indexability:** Every filtered view generates a unique URL, allowing the client to run targeted marketing campaigns (e.g., "Serviced Offices in Shoreditch").
- **Rich Snippets:** Integrated JSON-LD ensures that pricing and availability appear directly in Google Search results, increasing CTR.

### 📈 Conversion Optimization

- **The "Nudge" Pattern:** The mid-page conversion block is strategically placed after the 6th listing to catch users who are scrolling and may need expert guidance.
- **Micro-interactions:** Interactive cards and clear CTAs (Call to Actions) reduce friction in the user journey.

### 📱 Performance & Reliability

- **Next.js 16 Features:** Leveraged the latest asynchronous `params` and `searchParams` to enable Partial Prerendering (PPR), ensuring the "Above the Fold" content (Hero section) loads instantly.

#### 🤝 Contributing

1. Fork the Project

2. Create your Feature Branch (git checkout -b feature/AmazingFeature)

3. Commit your Changes (git commit -m 'Add some AmazingFeature')

4. Push to the Branch (git push origin feature/AmazingFeature)

5. Open a Pull Request

## 📝 License

This project is licensed under the [MIT License](https://github.com/imshibaji/FrontendAssessment/blob/main/LICENSE).

## 🙌 Credits

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)

## 👨‍💻 Author

- [Shibaji Debnath](https://shibajidebnath.com/)
- [LinkedIn](https://www.linkedin.com/in/shibaji)
- [GitHub](https://github.com/imshibaji)

- [YouTube](https://www.youtube.com/@ShibajiDebnath)
