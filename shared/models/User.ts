import { UserDocument } from './Document';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  country: string;
  documents: UserDocument[];
}
