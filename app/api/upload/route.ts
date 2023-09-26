import { NextRequest, NextResponse } from 'next/server';
import { createWorker } from 'tesseract.js';
import sharp from 'sharp';
import path from 'path';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const file: File | null = formData.get('document') as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false, data: null });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    const documentBuffer = await sharp(buffer)
      .resize({
        width: 500,
        fit: sharp.fit.inside,
      })
      .negate()
      .threshold()
      .toBuffer();

    const worker = await createWorker({
      // langPath: path.join(__dirname, '..', 'ocr', 'langs'),
      logger: (m) => {
        // console.clear();
        // console.log(`Loading...${Math.round(m.progress * 100)}%`);
      },
    });

    // const rectangles = [];

    await worker.loadLanguage('eng+ron');
    await worker.initialize('eng+ron');

    const {
      data: { text },
    } = await worker.recognize(documentBuffer);
    console.log(text);
    await worker.terminate();

    return NextResponse.json({ success: true, data: {} });
  } catch (error: any) {
    return NextResponse.json({ success: false, data: null });
  }
}
