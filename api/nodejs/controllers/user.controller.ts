import { Request, Response } from 'express';
import { User } from '@shared/models/User';
import { DocumentType } from '@shared/models/Document';

const mockUsers: User[] = [
  {
    id: 1,
    firstName: 'George',
    lastName: 'Baba',
    country: 'ROU',
    documents: [
      {
        slug: 'birth-certificate',
        type: 'birth_certificate',
        label: 'documents:birth_certificate',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],
  },
];

export function getOne(req: Request, res: Response): Response {
  return res
    .status(200)
    .json(mockUsers.find((user) => user.id === parseInt(req.params.id)));
}

export function getOneDocuments(req: Request, res: Response): Response {
  return res
    .status(200)
    .json(
      mockUsers.find((user) => user.id === parseInt(req.params.id))?.documents
    );
}
