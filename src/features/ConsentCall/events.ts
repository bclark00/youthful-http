export let test = {
  event: "invitee.created",
  time: "2019-12-31T12:30:48Z",
  payload: {
    event_type: {
      uuid: "EAHKEXSCK6LPREFX",
      kind: "One-on-One",
      slug: "consent-approval",
      name: "Additional Consent Approval Call",
      duration: 5,
      owner: {
        type: "users",
        uuid: "AGDFEQRZASWK4KUI"
      }
    },
    event: {
      uuid: "ABNLEYDZMXEBIMQV",
      assigned_to: ["PreConception"],
      extended_assigned_to: [
        {
          name: "PreConception",
          email: "sean@preconceptiontest.com",
          primary: true
        }
      ],
      start_time: "2019-12-31T13:00:00-08:00",
      start_time_pretty: "01:00pm - Tuesday, December 31, 2019",
      invitee_start_time: "2019-12-31T16:00:00-05:00",
      invitee_start_time_pretty: "04:00pm - Tuesday, December 31, 2019",
      end_time: "2019-12-31T13:05:00-08:00",
      end_time_pretty: "01:05pm - Tuesday, December 31, 2019",
      invitee_end_time: "2019-12-31T16:05:00-05:00",
      invitee_end_time_pretty: "04:05pm - Tuesday, December 31, 2019",
      created_at: "2019-12-31T04:30:47-08:00",
      location: "We'll call you",
      canceled: false,
      canceler_name: null,
      cancel_reason: null,
      canceled_at: null
    },
    invitee: {
      uuid: "BBMIXVCRAT3TKYOW",
      first_name: null,
      last_name: null,
      name: "Testy Test",
      email: "sean@me.com",
      text_reminder_number: null,
      timezone: "America/New_York",
      created_at: "2019-12-31T04:30:47-08:00",
      is_reschedule: false,
      payments: [],
      canceled: false,
      canceler_name: null,
      cancel_reason: null,
      canceled_at: null
    },
    questions_and_answers: [
      {
        question: "Phone",
        answer: "+1 949-445-4909"
      }
    ],
    questions_and_responses: {
      "1_question": "Phone",
      "1_response": "+1 949-445-4909"
    },
    tracking: {
      utm_campaign: null,
      utm_source: null,
      utm_medium: null,
      utm_content: null,
      utm_term: null,
      salesforce_uuid: null
    },
    old_event: null,
    old_invitee: null,
    new_event: null,
    new_invitee: null
  }
};
