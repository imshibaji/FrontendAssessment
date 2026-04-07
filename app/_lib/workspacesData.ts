import { promises as fs } from 'fs';
export async function searchWorkspaces(query: string) {
  const file = await fs.readFile(process.cwd() + '/app/data/listings.json', 'utf8');
  const data = JSON.parse(file);

  if (!query) return data;

  const lowerQuery = query.toLowerCase();
  return data.filter((item: any) => 
    item.name.toLowerCase().includes(lowerQuery) ||
    item.area.toLowerCase().includes(lowerQuery) ||
    item.borough.toLowerCase().includes(lowerQuery)
  );
}

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

  return data;
}