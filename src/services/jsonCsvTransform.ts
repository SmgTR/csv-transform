import { Transform } from 'json2csv';
import { Readable } from 'stream';
import { FilteredCandidates } from 'types/candidateTypes';

const jsonCsvTransform = (
  stream: Readable | (string | null)[],
  candidatesData: FilteredCandidates[]
) => {
  stream.push(JSON.stringify(candidatesData));
  stream.push(null);

  const transformOpts = { highWaterMark: 8192 };

  const json2csv = new Transform({}, transformOpts);

  return json2csv;
};

export default jsonCsvTransform;
