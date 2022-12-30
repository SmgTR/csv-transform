import axios from 'axios';
import { CandidateData, Candidate, JobApplication } from 'types/candidateTypes';

type GetAllPagesReturn = Promise<
  | {
      candidates: Candidate[];
      applications: JobApplication[];
      error?: undefined;
      err?: undefined;
    }
  | { error: string; err: unknown; candidates?: undefined; applications?: undefined }
>;

const getAllPages = async (url: string, candidates: CandidateData): GetAllPagesReturn => {
  const response = await axios.get(url, {
    headers: {
      Authorization: `Token token=${process.env.API_KEY}`,
      'X-Api-Version': '20210218'
    }
  });

  const dataResult = response.data.data;
  const includedData = response.data.included;

  const retrievedCandidates = candidates.candidates.concat(dataResult);
  const retrievedInclude = candidates.applications.concat(includedData);
  const nextPage = response.data.links.next && decodeURIComponent(response.data.links.next);

  if (nextPage && retrievedCandidates) {
    return await getAllPages(nextPage, {
      candidates: retrievedCandidates,
      applications: retrievedInclude
    });
  } else {
    return { candidates: retrievedCandidates, applications: retrievedInclude };
  }
};

export default getAllPages;
