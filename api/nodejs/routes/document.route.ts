import { Router } from 'express';

import { getAddQRCode } from '../controllers/document.controller';

const router = Router();

router.get('/qrcode/:uuid', getAddQRCode);

export default router;
