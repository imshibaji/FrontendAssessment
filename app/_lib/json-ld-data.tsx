import { notFound } from "next/navigation";
import { getWorkspace } from "./workspacesData";

export default async function JsonLdData({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workspace = await getWorkspace(id);

  if (!workspace) return notFound();

  // Create the Structured Data object
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product', // Or 'LocalBusiness' depending on your SEO strategy
    name: workspace.name,
    image: workspace.image_url,
    description: workspace.description,
    sku: workspace.id,
    offers: {
      '@type': 'Offer',
      price: workspace.price_per_desk || '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
      url: `${process.env.BASEURL}/workspaces/${workspace.id}`,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: workspace.address,
      addressLocality: workspace.area,
      addressRegion: 'London',
      postalCode: workspace.address.split(',').pop()?.trim(), // Simple regex/split to get post code
      addressCountry: 'GB',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}