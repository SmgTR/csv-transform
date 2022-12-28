import { Transform } from 'json2csv';
import { Readable } from 'stream';

const defaultData = [
  {
    car: 'Audi',
    price: 40000,
    color: 'blue'
  },
  {
    car: 'BMW',
    price: 35000,
    color: 'black'
  },
  {
    car: 'Porsche',
    price: 60000,
    color: 'green'
  }
];

const jsonCsvTransform = (stream: Readable | (string | null)[]) => {
  stream.push(JSON.stringify(defaultData));
  stream.push(null);

  const transformOpts = { highWaterMark: 8192 };

  const json2csv = new Transform({}, transformOpts);

  return json2csv;
};

export default jsonCsvTransform;
