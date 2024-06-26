import { Router } from 'express';

import { getOne, getOneDocuments } from '../controllers/user.controller';

const router = Router();

router.get('/:id', getOne);
router.get('/:id/documents', getOneDocuments);

export default router;
