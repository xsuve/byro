import { Request, Response } from 'express';
import { Process } from '@shared/models/Process';

const mockProcesses: Process[] = [
  {
    slug: 'processes:vehicle_registration.slug',
    category: {
      slug: 'processes:vehicle_registration.category.slug',
      title: 'processes:vehicle_registration.category.title',
    },
    icon: 'Truck',
    title: 'processes:vehicle_registration.title',
    description: 'processes:vehicle_registration.description',
    official: {
      title: 'processes:vehicle_registration.official.title',
      link: 'https://dgpci.mai.gov.ro/documents-and-forms/inmatriculari',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    slug: 'processes:id_card_changing.slug',
    category: {
      slug: 'processes:id_card_changing.category.slug',
      title: 'processes:id_card_changing.category.title',
    },
    icon: 'SquareUser',
    title: 'processes:id_card_changing.title',
    description: 'processes:id_card_changing.description',
    official: {
      title: 'processes:id_card_changing.official.title',
      link: 'http://depabd.mai.gov.ro/documente_necesare.html',
    },
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export function getAll(req: Request, res: Response): Response {
  return res.status(200).json(mockProcesses);
}
