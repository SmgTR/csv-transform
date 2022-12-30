import { Candidate, CandidateData, JobApplication } from 'types/candidateTypes';

const filterCandidatesData = (data: CandidateData) => {
  let applicationData: { id: string; createdAt: string }[] | undefined;
  const filterCandidatesData = data.candidates.map((candidate: Candidate) => {
    const { 'first-name': first_name, 'last-name': last_name, email } = candidate.attributes;

    const candidateData = {
      candidate_id: candidate.id,
      first_name,
      last_name,
      email
    };

    if (candidate.relationships['job-applications'].data) {
      const jobRelation = candidate.relationships['job-applications'].data.map(
        (relation: { id: string; type: string }) => {
          return data.applications.filter(
            (application: JobApplication) => application.id === relation.id
          );
        }
      );
      applicationData = jobRelation.flatMap((data) => {
        return { id: data[0].id, createdAt: data[0].attributes['created-at'] };
      });

      if (applicationData.length <= 1) {
        return {
          ...candidateData,
          job_application_id: applicationData[0].id ?? '',
          job_application_created_at: applicationData[0].createdAt ?? ''
        };
      } else {
        return applicationData.map((application) => {
          return {
            ...candidateData,
            job_application_id: application.id ?? '',
            job_application_created_at: application.createdAt ?? ''
          };
        });
      }
    } else {
      return {
        ...candidateData,
        job_application_id: '',
        job_application_created_at: ''
      };
    }
  });

  return filterCandidatesData.flatMap((candidate) => candidate);
};

export default filterCandidatesData;
