import { useMemo } from "react";
import { createContainer } from "unstated-next";
import PublicTrueVaultAPI from "../api/Public/PublicTrueVaultAPI";
import AccountManagement from "../features/AccountManagement";
import Attributes from "../features/Attributes";
import Authentication from "../features/Authentication";
import Conditionals from "../features/Conditionals";
import DeviceDetector from "../features/DeviceDetector";
import LoadingScreens from "../features/LoadingScreens";
import ModalProvider from "../features/ModalProvider";
import Results from "../features/Results";

function useStore() {
  const auth = Authentication.Store();
  const {
    attributes,
    updateAttributes,
    updating,
    setUpdating
  } = Attributes.Store();
  let account = AccountManagement.Store();
  const { conditionals, calculateConditionals } = Conditionals.Store();
  let results = Results.Store();
  const loading = LoadingScreens.Store();
  const device = DeviceDetector.Platform();
  const modal = ModalProvider.Store();
  const initialize = useMemo(
    () => async (event?: any) => {
      let access_token = await localStorage.getItem("access_token");
      if (!access_token) {
        auth.setCheckComplete(true);
        return;
      } else if (access_token) {
        try {
          let { user, status } = await PublicTrueVaultAPI.authCheck(
            access_token
          );
          if (!user) {
            auth.setCheckComplete(true);
          }
          switch (status) {
            case "succeeded":
              calculateConditionals(user.attributes);
              auth.setUsername(user.username);
              auth.setUserId(user.user_id);
              updateAttributes((draft: any) => (draft = user.attributes));
              auth.logIn();
              loading.setPending(false);
              auth.setCheckComplete(true);
              event.detail.complete();
              return;
            case "failed":
              auth.logOut();
              loading.setPending(false);
              auth.setCheckComplete(true);
              event.detail.complete();
              return;
            case "disconnected":
              auth.logOut();
              loading.setPending(false);
              auth.setCheckComplete(true);

              event.detail.complete();
              return;
          }
        } catch (error) {}
      } else throw new Error("No Access Token");
    },
    []
  );

  const update = async (attributes: any) => {
    let access_token = await localStorage.getItem("access_token");
    if (!access_token) {
      loading.setAuthorizing(false);
      return;
    } else if (access_token) {
      // loading.setUpdateMessage("Updating...");
      loading.setPending(true);
      setUpdating(true);
      try {
        let { user, status } = await PublicTrueVaultAPI.updateUserAttributes(
          //@ts-ignore
          access_token,
          auth.userId,
          attributes
        );
        switch (status) {
          case "succeeded":
            calculateConditionals(user.attributes);
            setUpdating(false);
            loading.setUpdateMessage("Update succeeded");
            updateAttributes((draft: any) => (draft = user.attributes));
            auth.setUsername(user.username);
            auth.setUserId(user.user_id);
            loading.setPending(false);
            return;
          case "failed":
            loading.setUpdateMessage("Update failed");
            setUpdating(false);
            // auth.logOut();
            // auth.clearAccessToken();
            window.location.reload(true);
            loading.setPending(false);
            return;
          case "disconnected":
            setUpdating(false);
            calculateConditionals(user.attributes);
            auth.setLogInError("Not connected");
            loading.setPending(false);
            loading.setUpdateMessage("Update failed");
            return;
        }
      } catch (error) {}
    } else throw new Error("No Access Token");
  };

  return {
    ...conditionals,
    ...attributes,
    calculateConditionals,
    attributes,
    update,
    updateAttributes,
    account,
    modal,
    loading,
    auth,
    device,
    initialize,
    updating,
    setUpdating,
    results
  };
}

const Store = createContainer(useStore);
export default Store;
