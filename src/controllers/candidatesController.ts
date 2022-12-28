import { Response, Request } from 'express';
import { Readable } from 'stream';

import jsonCsvTransform from '@/services/jsonCsvTransform';

export const sendCandidatesFile = async (req: Request, res: Response) => {
  try {
    const stream = new Readable();

    const csvData = jsonCsvTransform(stream);

    if (!csvData)
      return res.status(400).json({ error: 'Something went wrong, please check provided data' });

    res.setHeader('Content-disposition', 'attachment; filename=candidates.csv');
    res.writeHead(200, { 'Content-Type': 'text/csv' });
    return stream.pipe(csvData).pipe(res);
  } catch {
    return res.status(500).json({ error: 'Something went wrong, please try again' });
  }
};
