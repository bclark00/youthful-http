import { Machine } from "xstate";

export const consentMachine = Machine({
  id: "consentCollector",
  context: {
    signature: null,
    blob: null,
    modalOpen: false,
    pageNumber: 1,
    numPages: null,
    width: null
  },
  initial: "closed",
  states: {
    closed: {},
    open: {
      type: "parallel",
      states: {
        view: {
          initial: "unseen",
          states: {
            unseen: {},
            seen: {}
          }
        },
        render: {
          initial: "rendering",
          states: {
            rendering: {},
            rendered: {},
            error: {}
          }
        },
        collect: {
          initial: "unsigned",
          states: {
            unsigned: {},
            signed: {}
          }
        }
      }
    }
  }
});
