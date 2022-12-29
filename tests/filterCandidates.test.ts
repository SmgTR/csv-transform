import filterCandidatesData from '@/utils/filterCandidatesData';
import { CandidateData } from 'types/candidateTypes';
import { candidatesData } from './testsData';

describe('test candidates data filtering', () => {
  let candidates: CandidateData;

  beforeEach(() => {
    candidates = candidatesData;
  });

  it('should return empty string if application data is empty', () => {
    const filteredData = filterCandidatesData(candidatesData);
    const emptyApplications = filteredData.findIndex((app) => {
      if (!app.job_application_id) return app;
      return;
    });

    expect(filteredData[emptyApplications].job_application_id).toBe('');
  });

  it('should return array item for each candidate application item', () => {
    candidates.candidates[0].relationships['job-applications'].data?.push({
      type: 'job-application',
      id: '2'
    });
    const filteredData = filterCandidatesData(candidatesData);

    expect(filteredData.length).toBe(candidates.candidates.length + 1);
  });
});
