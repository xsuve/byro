export type DocumentType = 'identity_card' | 'birth_certificate';

export interface Document {
  slug: string;
  type: DocumentType;
  label: string;
}

export interface ProcessDocument extends Document {}

export interface UserDocument extends Document {
  createdAt: Date;
  updatedAt: Date;
}
