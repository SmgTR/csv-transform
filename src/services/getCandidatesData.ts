import filterCandidatesData from '@/utils/filterCandidatesData';
import getAllPages from '@/utils/getAllPages';

const getCandidatesData = async () => {
  const candidatesData = await getAllPages(
    'https://api.teamtailor.com/v1/candidates?include=job-applications&page[size]=30',
    { candidates: [], applications: [] }
  );

  if (candidatesData?.candidates) return filterCandidatesData(candidatesData);
  throw new Error();
};

export default getCandidatesData;
