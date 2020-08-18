import { useMachine } from "@xstate/react";
import { Machine } from "xstate";

const modalThatFetchesMachine = Machine({
  id: "modalThatFetches",
  initial: "closed",
  context: {},
  states: {
    closed: {
      on: {
        OPEN: "opened"
      }
    },
    opened: {
      on: {
        CLOSE: "closed"
      },
      initial: "fetching",
      states: {
        fetching: {
          on: {
            SUCCESS: "fetchSucceeded",
            FAIL: "fetchFailed"
          }
        },
        fetchSucceeded: {
          initial: "notDownloaded",
          states: {
            downloaded: {
              type: "final"
            },
            notDownloaded: {
              on: {
                DOWNLOAD: "downloaded"
              }
            }
          }
        },
        fetchFailed: {
          on: {
            RETRY: "fetching"
          }
        }
      }
    }
  }
});

export const useModalThatFetchesMachine = () => {
  const [state, send] = useMachine(modalThatFetchesMachine);

  return {
    send,
    show: state.matches("opened"),
    close: () => {
      send("CLOSE");
    },
    open: () => {
      send("OPEN");
    }
  };
};
