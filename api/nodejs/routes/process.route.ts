import { Router } from 'express';

import {
  getAll,
  getOne,
  generatePDFFolder,
} from '../controllers/process.controller';

const router = Router();

router.get('/', getAll);
router.get('/:slug', getOne);
router.post('/:slug/generate', generatePDFFolder);

export default router;
