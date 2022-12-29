export const candidatesData = {
  candidates: [
    {
      id: '1',
      type: 'candidate',
      attributes: {
        'created-at': '2022-09-08T12:02:40.610+02:00',
        email: 'test@test.com',
        'first-name': 'Joe',
        'last-name': 'Doe'
      },
      relationships: {
        'job-applications': {
          links: {
            self: '',
            related: ''
          },
          data: [
            {
              type: 'job-application',
              id: '1'
            }
          ]
        }
      }
    },
    {
      id: '2',
      type: 'candidate',
      attributes: {
        'created-at': '2022-09-08T12:02:40.610+02:00',
        email: 'test@test.com',
        'first-name': 'Bruce',
        'last-name': 'Wayne'
      },
      relationships: {
        'job-applications': {
          links: {
            self: '',
            related: ''
          },
          data: [
            {
              type: 'job-application',
              id: '3'
            }
          ]
        }
      }
    },
    {
      id: '3',
      type: 'candidate',
      attributes: {
        'created-at': '2022-09-08T12:02:40.610+02:00',
        email: 'test@test.com',
        'first-name': 'Luke',
        'last-name': 'Skywalker'
      },
      relationships: {
        'job-applications': {
          links: {
            self: '',
            related: ''
          }
        }
      }
    }
  ],
  applications: [
    {
      id: '1',
      type: 'job-application',
      links: {
        self: ''
      },
      attributes: {
        'created-at': '2022-09-08T12:02:40.610+02:00',
        'updated-at': '2022-09-08T12:02:40.610+02:00'
      }
    },
    {
      id: '2',
      type: 'job-application',
      links: {
        self: ''
      },
      attributes: {
        'created-at': '2022-09-08T12:02:40.610+02:00',
        'updated-at': '2022-09-08T12:02:40.610+02:00'
      }
    },
    {
      id: '3',
      type: 'job-application',
      links: {
        self: ''
      },
      attributes: {
        'created-at': '2022-09-08T12:02:40.610+02:00',
        'updated-at': '2022-09-08T12:02:40.610+02:00'
      }
    },
    {
      id: '4',
      type: 'job-application',
      links: {
        self: ''
      },
      attributes: {
        'created-at': '2022-09-08T12:02:40.610+02:00',
        'updated-at': '2022-09-08T12:02:40.610+02:00'
      }
    }
  ]
};
