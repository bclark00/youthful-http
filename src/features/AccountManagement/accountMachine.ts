import { createMachine } from "xstate";

export const accountmachine = createMachine({
  initial: "idle",
  states: {
    idle: {},
    updatingPassword: {},
    updatingUsername: {},
    error: {}
  }
});
