import { Metadata } from 'next';
import WorkspaceCard from '../components/WorkspaceCard';
import Filters from '../components/Filters';
import Header from '../components/Header';
import { filterWorkspaces } from '../_lib/workspacesData';
import Conversion from '../components/Conversion';
import Faqs from '../components/Faqs';

export const metadata: Metadata = {
  title: {
    default: 'InnateAI | Premium London Workspaces',
    template: '%s | Workspaces in London',
  },
  description: 'List of Workspaces in London, London, UK',
}

export default async function ServicedOfficesPage({ searchParams }: { searchParams: Promise<any> }) {
  const filters = await searchParams;
  const workspaces = await filterWorkspaces(filters);

  return (
    <div className="bg-slate-50 dark:bg-slate-950 min-h-screen">
      <Header />
      
      <main className="max-w-7xl mx-auto px-6 -mt-12 relative z-20 pb-20">
        
        <Filters />

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workspaces.slice(0, 6).map((ws: any) => (
            <WorkspaceCard key={ws.id} workspace={ws} />
          ))}
        </div>

        {/* Mid-Page Conversion Block */}
        <Conversion />

        {/* Remaining Listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {workspaces.slice(6).map((ws: any) => (
            <WorkspaceCard key={ws.id} workspace={ws} />
          ))}
        </div>

        {/* FAQ Section */}
        <Faqs />
      </main>
    </div>
  );
}

