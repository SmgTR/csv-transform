import filterCandidatesData from '@/utils/filterCandidatesData';
import getAllPages from '@/utils/getAllPages';
import { CandidateData } from 'types/candidateTypes';

const getCandidatesData = async () => {
  const candidatesData: CandidateData = await new Promise((resolve, reject) => {
    getAllPages(
      'https://api.teamtailor.com/v1/candidates?include=job-applications&page[size]=30',
      { candidates: [], applications: [] },
      resolve,
      reject
    );
  });

  return filterCandidatesData(candidatesData);
};

export default getCandidatesData;
