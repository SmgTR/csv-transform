export interface Candidate {
  id: string;
  type: string;
  attributes: {
    'created-at': string;
    email: string;
    'first-name': string;
    'last-name': string;
  };
  relationships: {
    'job-applications': {
      links: {
        self: string;
        related: string;
      };
      data?: {
        type: string;
        id: string;
      }[];
    };
  };
}

export interface FilteredCandidates {
  candidate_id: string;
  first_name: string;
  last_name: string;
  email: string;
  job_application_id: string;
  job_application_created_at: string;
}

export interface JobApplication {
  id: string;
  type: string;
  links: {
    self: string;
  };
  attributes: {
    'created-at': string;
    'updated-at': string;
  };
}

export interface CandidateData {
  candidates: Candidate[];
  applications: JobApplication[];
}
