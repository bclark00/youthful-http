import { Machine } from "xstate";

export const userMachine = Machine({
  initial: "loading",
  states: {
    loading: {},
    updated: {},
    updating: {},
    outdated: {}
  }
});
