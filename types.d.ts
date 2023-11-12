type ProcessStepOption = {
  id: string;
  label: string;
  next: string | null;
};

type ProcessOfficial = {
  title: string;
  link: string;
};

export type ProcessStep = {
  id: string;
  title: string;
  options: ProcessStepOption[] | null;
  documents: string[] | null;
};

export interface Process {
  slug: string;
  category: string;
  icon: string;
  title: string;
  description: string;
  keywords: string;
  official: ProcessOfficial;
  updatedAt: string;
  createdAt: string;
  steps: ProcessStep[];
}

export interface Document {
  id: string;
  title: string;
  description: string[] | null;
  download: string | null;
}
