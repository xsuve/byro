import { Request, Response } from 'express';
import QRCode from 'qrcode';

export async function getAddQRCode(req: Request, res: Response) {
  try {
    const qrCode = await QRCode.toDataURL(req.params.uuid, {
      margin: 0,
    });

    return res.status(200).json(qrCode);
  } catch (error) {
    return res.status(500).send(error);
  }
}
