import { Process } from '@shared/models/Process';
import { GET } from '@/utils/api';

const endpoint = '/processes';

export async function getAllProcesses() {
  const response = await GET<Process[]>(endpoint);

  return response.data;
}

export async function getProcess(slug: string | undefined) {
  if (!slug) {
    throw new Error('Slug not set.');
  }

  const response = await GET<Process>(`${endpoint}/${slug}`);

  return response.data;
}
