type ProcessStepDocument = {
  id: string;
  title: string;
  description: string[] | null;
  download: string | null;
};

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
  documents: ProcessStepDocument[] | null;
};

export interface Process {
  slug: string;
  icon: string;
  title: string;
  description: string;
  keywords: string[];
  official: ProcessOfficial;
  updatedAt: string;
  createdAt: string;
  steps: ProcessStep[];
}
