export interface ProcessCategory {
  slug: string;
  title: string;
}

export interface ProcessOfficial {
  title: string;
  link: string;
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
}
