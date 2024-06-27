import { Process } from '@shared/models/Process';
import { GET, POST } from '@/utils/api';

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

export async function generatePDFFolder(slug: string, data: any) {
  if (!slug) {
    throw new Error('Slug not set.');
  }

  if (!data) {
    throw new Error('Data not set.');
  }

  const response = await POST(
    `${endpoint}/${slug}/generate`,
    { ...data },
    { responseType: 'arraybuffer' }
  );

  return response.data;
}
