import React from "react";
import Authorizing from "../features/LoadingScreens/Authorizing";
import LoadingInformation from "../features/LoadingScreens/LoadingInformation";
import LoadingMessages from "../features/LoadingScreens/LoadingMessages";
import LoggingIn from "../features/LoadingScreens/LoggingIn";
import LoggingOut from "../features/LoadingScreens/LoggingOut";
import SendingResults from "../features/LoadingScreens/SendingResults";
import UpdatingApp from "../features/LoadingScreens/UpdatingApp";
import UpdatingProfile from "../features/LoadingScreens/UpdatingProfile";

export default function() {
  return (
    <>
      <Authorizing key="authorizing" />
      <LoggingIn key="loggingIn" />
      <LoggingOut key="loggingOut" />
      <LoadingInformation key="loadingInformation" />
      <LoadingMessages key="loadingMessages" />
      <SendingResults key="sendingResults" />
      <UpdatingApp key="updatingApp" />
      <UpdatingProfile key="updatingProfile" />
    </>
  );
}
