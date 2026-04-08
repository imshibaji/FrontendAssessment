import { getWorkspace, generateSeoData } from '@/app/_lib/workspacesData';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import JsonLdData from '@/app/_lib/json-ld-data';
import Navbar from '@/app/components/Navbar';
import Image from './components/Image';
import PriceCard from './components/PriceCard';
import SpaceDetails from './components/SpaceDetails';

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  return generateSeoData({ params });
}

export default async function WorkspaceDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workspace = await getWorkspace(id);

  if (!workspace) return notFound();

  const faqs = [
    { q: "What is included in the price?", a: "The monthly fee typically covers high-speed WiFi, utilities, cleaning, and access to communal areas like kitchens and lounges." },
    { q: "Can I book a viewing?", a: `Yes, contact ${workspace.advisor.name} at ${workspace.advisor.phone} to arrange a private tour of the facility.` },
    { q: "Are there flexible contract terms?", a: "Most of our spaces offer monthly rolling contracts, though longer commitments often secure a better rate." }
  ];

  return (
    <section>
      <JsonLdData params={params} />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
        {/* 1. Header & Navigation */}
        <Navbar name={workspace.name} />

        <main className="max-w-7xl mx-auto px-6 pt-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Left Column (Main Content) */}
            <div className="lg:col-span-2">
              {/* Image Section */}
              <Image ws={workspace} />

              {/* Details Section */}
              <SpaceDetails ws={workspace} faqs={faqs} />
            </div>

            {/* Right Column (Floating Contact Card) */}
            <div className="lg:relative">
              <div className="sticky top-24 space-y-6">
                <PriceCard ws={workspace} />
              </div>
            </div>

          </div>
        </main>
      </div>
    </section>
  );
}