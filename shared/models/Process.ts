import { ProcessDocument } from './Document';

export interface ProcessCategory {
  slug: string;
  title: string;
}

export interface ProcessOfficial {
  title: string;
  link: string;
}

export type ProcessFieldType = 'text' | 'select' | 'boolean' | 'date';

export interface ProcessFieldOption {
  value: string;
  label: string;
}
export interface ProcessField {
  type: ProcessFieldType;
  name: string;
  label: string;
  options?: ProcessFieldOption[]; // select type
  checked?: boolean; // boolean type
}

export type ProcessStepType = 'fields' | 'documents' | 'generate';

export interface ProcessStep {
  type: ProcessStepType;
  title: string;
  slug: string;
  fields?: ProcessField[];
  documents?: ProcessDocument[];
}

export interface Process {
  slug: string;
  category: ProcessCategory;
  icon: string;
  title: string;
  description: string;
  official: ProcessOfficial;
  createdAt: Date;
  updatedAt: Date;
  steps: ProcessStep[];
}
