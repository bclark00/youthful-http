import { useState } from "react";

export default function useTrueVault() {
  const [checkComplete, setCheckComplete] = useState(false);
  const [logInError, setLogInError] = useState("");
  const [registration, setRegistrationError] = useState("");
  const [username, setUsername] = useState();
  const [userId, setUserId] = useState();
  const [loggedIn, setLoggedIn] = useState(false);
  const accessToken = localStorage.getItem("access_token");
  const setAccessToken = (access_token: string) =>
    localStorage.setItem("access_token", access_token);
  const clearAccessToken = () => localStorage.removeItem("access_token");
  const logIn = () => setLoggedIn(true);
  const logOut = () => setLoggedIn(false);
  return {
    checkComplete,
    setCheckComplete,
    userId,
    setUserId,
    accessToken,
    clearAccessToken,
    loggedIn,
    logIn,
    logInError,
    logOut,
    registration,
    setAccessToken,
    setLogInError,
    setRegistrationError,
    setUsername,
    username
  };
}
