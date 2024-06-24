import { Process } from '@/models/process.model';
import { GET } from '@/utils/api';

const endpoint = '/processes';

export async function getAllProcesses() {
  try {
    const response = await GET<Process[]>(endpoint);

    console.log(response.data);

    return response.data;
  } catch (error) {
    throw error;
  }
}
