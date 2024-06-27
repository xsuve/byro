import { Request, Response } from 'express';
import { Process } from '@shared/models/Process';
import { countryList } from '../utils/countryList';
import path from 'path';
import { compile } from 'handlebars';
import { readFileSync } from 'fs';
import puppeteer from 'puppeteer';

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
          {
            type: 'text',
            name: 'drivingSchoolName',
            label: 'fields:driving_school_name',
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
            label: 'platform:process.steps.hide_documents_logo',
            checked: true,
          },
          {
            type: 'boolean',
            name: 'savePersonalDocuments',
            label: 'platform:process.steps.save_personal_documents',
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

export async function generatePDFFolder(req: Request, res: Response) {
  const { slug } = req.params;

  try {
    const templateFile = path.resolve(
      __dirname,
      '../templates/' + slug + '.html'
    );

    const templateData = {
      ...req.body,
      // country: countryList.find((country) => country.code === req.body.country)
      //   ?.name,
      // placeOfBirth: 'Mun. Dej Jud. Cluj',
      // series: 'SS',
      // number: '099994',
      // issuedBy: 'D.E.P.A.B.D.',
      // todayDate: '27.06.2024',
      documentsImages: [],
    };

    const templateHtml = readFileSync(templateFile, 'utf8');
    const template = compile(templateHtml);
    const html = template(templateData);

    const browser = await puppeteer.launch({
      args: ['--no-sandbox'],
      headless: true,
    });
    const page = await browser.newPage();
    await page.goto(`data:text/html;charset=UTF-8,${html}`, {
      waitUntil: 'networkidle0',
    });

    const pdf = await page.pdf({
      displayHeaderFooter: false,
      format: 'A4',
      printBackground: true,
    });
    await browser.close();

    return res.status(200).send(pdf);
  } catch (error) {
    return res.status(500).send(error);
  }
}
