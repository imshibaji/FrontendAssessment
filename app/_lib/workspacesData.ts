import { Metadata } from 'next';
import { promises as fs } from 'fs';


export async function filterWorkspaces(filters: any) {
  const file = await fs.readFile(process.cwd() + '/app/data/listings.json', 'utf8');
  let data = JSON.parse(file);

  if (filters.query) {
    data = data.filter((item: any) => item.name.toLowerCase().includes(filters.query.toLowerCase()));
  }
  if (filters.type) {
    data = data.filter((item: any) => item.type === filters.type);
  }
  if (filters.area) {
    data = data.filter((item: any) => item.area === filters.area);
  }
  if (filters.budget) {
    data = data.filter((item: any) => (item.price_per_desk || 0) <= parseInt(filters.budget));
  }
  if (filters.desks) {
    data = data.filter((item: any) => item.desks >= parseInt(filters.desks));
  }

  // Sorting
  if (filters.sort === 'price_low') {
    data.sort((a: any, b: any) => (a.price_per_desk || 0) - (b.price_per_desk || 0));
  } else if (filters.sort === 'price_high') {
    data.sort((a: any, b: any) => (b.price_per_desk || 0) - (a.price_per_desk || 0));
  }

  return data;
}


export async function getWorkspace(id: string) {
  // Ensure this path matches your project structure
  const file = await fs.readFile(process.cwd() + '/app/data/listings.json', 'utf8');
  const data = JSON.parse(file);
  return data.find((item: any) => item.id === id);
}

// --- THIS IS THE SEO DATA GENERATOR ---
export async function generateSeoData(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  // 1. Unwrapping the params promise
  const { id } = await params;
  
  // 2. Fetching the specific workspace data
  const workspace = await getWorkspace(id);

  // 3. Fallback if workspace isn't found
  if (!workspace) {
    return {
      title: 'Workspace Not Found',
      description: 'The requested office listing could not be found.'
    };
  }

  // 4. Returning the dynamic metadata
  return {
    title: `${workspace.name} | London Office Space`,
    description: workspace.description.substring(0, 160), // Limit for SEO
    openGraph: {
      title: workspace.name,
      description: workspace.description,
      images: [workspace.image_url || ''],
    },
  };
}