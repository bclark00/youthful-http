import { useState } from "react";
import { createContainer } from "unstated-next";

export default function useLoading() {
  const [authorizing, setAuthorizing] = useState(
    determineIfAuthorizingShouldBeInitiallyTrue()
  );
  const [loadingInformation, setLoadingInformation] = useState(false);
  const [loadingMessages, setLoadingMessages] = useState(false);
  const [loadingResults, setLoadingResults] = useState(false);
  const [loggingIn, setLoggingIn] = useState(false);
  const [loggingOut, setLoggingOut] = useState(false);
  const [sendingResults, setSendingResults] = useState(false);
  const [updatingApp, setUpdatingApp] = useState(false);
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [pending, setPending] = useState(false);
  const [updateMessage, setUpdateMessage] = useState("");

  return {
    authorizing,
    loadingInformation,
    loadingResults,
    loadingMessages,
    setLoadingMessages,
    loggingIn,
    loggingOut,
    setAuthorizing,
    setLoadingInformation,
    setLoadingResults,
    setLoggingIn,
    setLoggingOut,
    sendingResults,
    setSendingResults,
    updatingApp,
    setUpdatingApp,
    updatingProfile,
    setUpdatingProfile,
    pending,
    setPending,
    updateMessage,
    setUpdateMessage
  };
}

export const Loading = createContainer(useLoading);

function determineIfAuthorizingShouldBeInitiallyTrue() {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) return true;
  else return false;
}
