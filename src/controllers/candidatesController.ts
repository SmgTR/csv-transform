import { Response, Request } from 'express';
import { Readable } from 'stream';

import jsonCsvTransform from '@/services/jsonCsvTransform';
import getCandidatesData from '@/services/getCandidatesData';
import { FilteredCandidates } from 'types/candidateTypes';

export const sendCandidatesFile = async (req: Request, res: Response) => {
  try {
    const stream = new Readable();

    const candidatesData = (await getCandidatesData()) as FilteredCandidates[];

    if (candidatesData) {
      const csvData = jsonCsvTransform(stream, candidatesData);

      res.setHeader('Content-disposition', 'attachment; filename=candidates.csv');
      res.writeHead(200, { 'Content-Type': 'text/csv' });
      return stream.pipe(csvData).pipe(res);
    } else {
      throw new Error();
    }
  } catch {
    return res.status(500).json({ error: 'Something went wrong, please try again' });
  }
};
