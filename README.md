# 🚀 London Workspace Finder (InnateAI)

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
