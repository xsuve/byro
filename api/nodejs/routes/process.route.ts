import { Router } from 'express';

import { getAll, getOne } from '../controllers/process.controller';

const router = Router();

router.get('/', getAll);
router.get('/:slug', getOne);

export default router;
