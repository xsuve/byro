import { Request, Response } from 'express';
import { Process } from '@shared/models/Process';
import { DocumentType } from '@shared/models/Document';
import { countryList } from '../utils/countryList';

const mockProcesses: Process[] = [
  {
    slug: 'inmatriculare-autovehicul',
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
    steps: [
      {
        type: 'fields',
        title: 'platform:process.steps.general_informations',
        slug: 'general-informations',
        fields: [
          { type: 'text', name: 'firstName', label: 'fields:first_name' },
          { type: 'text', name: 'lastName', label: 'fields:last_name' },
          {
            type: 'select',
            name: 'country',
            label: 'fields:country',
            options: countryList.map((country) => ({
              value: country.code,
              label: country.translation,
            })),
          },
        ],
      },
      {
        type: 'documents',
        title: 'platform:process.steps.documents_verification',
        slug: 'documents-verification',
        documents: [
          {
            slug: 'birth-certificate',
            type: 'birth_certificate',
            label: 'documents:birth_certificate',
          },
          {
            slug: 'identity-card',
            type: 'identity_card',
            label: 'documents:identity_card',
          },
        ],
      },
      {
        type: 'generate',
        title: 'platform:process.steps.files_generation',
        slug: 'files-generation',
        fields: [
          {
            type: 'boolean',
            name: 'hideLogo',
            label: 'fields:hide_documents_logo',
            checked: true,
          },
          {
            type: 'boolean',
            name: 'savePersonalDocuments',
            label: 'fields:save_personal_documents',
            checked: false,
          },
        ],
      },
    ],
  },
  {
    slug: 'schimbare-carte-identitate',
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
    steps: [],
  },
];

export function getAll(req: Request, res: Response): Response {
  return res.status(200).json(mockProcesses);
}

export function getOne(req: Request, res: Response): Response {
  return res
    .status(200)
    .json(mockProcesses.find((process) => process.slug === req.params.slug));
}
