import { createMachine } from "xstate";

export const progressMachine = createMachine({
  states: {
    registered: {
      states: {
        blacklisted: {
          type: "final"
        },
        additionalConsentState: {
          type: "parallel",
          states: {
            standardTestingAgreed: {}
          }
        },
        standardConsentState: {},
        profileIncomplete: {},
        profileComplete: {}
      }
    },
    purchased: {},
    order: {},
    visited: {},
    processed: {}
  }
});
