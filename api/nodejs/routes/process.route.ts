import { Router } from 'express';

import { getAll } from '../controllers/process.controller';

const router = Router();

router.get('/', getAll);

export default router;
