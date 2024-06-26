import { User } from '@shared/models/User';
import { GET } from '@/utils/api';
import { UserDocument } from '@shared/models/Document';

const endpoint = '/users';

export async function getUser(id: number) {
  if (!id) {
    throw new Error('Id not set.');
  }

  const response = await GET<User>(`${endpoint}/${id}`);

  return response.data;
}

export async function getUserDocuments(id: number) {
  if (!id) {
    throw new Error('Id not set.');
  }

  const response = await GET<UserDocument[]>(`${endpoint}/${id}/documents`);

  return response.data;
}
