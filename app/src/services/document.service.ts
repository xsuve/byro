import { GET } from '@/utils/api';

const endpoint = '/documents';

export async function getAddDocumentQRCode(uuid: string) {
  if (!uuid) {
    throw new Error('UUID not set.');
  }

  const response = await GET<string>(`${endpoint}/qrcode/${uuid}`);

  return response.data;
}
