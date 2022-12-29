import axios from 'axios';
import { CandidateData } from 'types/candidateTypes';

const getAllPages = async (url: string, candidates: CandidateData, resolve: any, reject: any) => {
  await axios
    .get(url, {
      headers: {
        Authorization: `Token token=${process.env.API_KEY}`,
        'X-Api-Version': '20210218'
      }
    })
    .then((response) => {
      const dataResult = response.data.data;
      const includedData = response.data.included;

      const retrievedCandidates = candidates.candidates.concat(dataResult);
      const retrievedInclude = candidates.applications.concat(includedData);
      const nextPage = response.data.links.next && decodeURIComponent(response.data.links.next);

      if (nextPage) {
        retrievedCandidates &&
          getAllPages(
            nextPage,
            { candidates: retrievedCandidates, applications: retrievedInclude },
            resolve,
            reject
          );
      } else {
        resolve({ candidates: retrievedCandidates, applications: retrievedInclude });
      }
    })
    .catch((err) => {
      reject({ error: 'Something went wrong. Please try again.', err });
    });
};

export default getAllPages;
