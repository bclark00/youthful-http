import { useState } from "react";

export default function useModal() {
  const [authenticationOpen, setAuthenticationOpen] = useState(false);
  const [passwordResetRequestOpen, setPasswordResetRequestOpen] = useState(
    false
  );
  const [directOrderModalOpen, setDirectOrderModalOpen] = useState(false);
  const [profilePictureModalopen, setProfilePictureModalopen] = useState(false);
  const [
    authenticatedOrderModalOpen,
    setauthenticatedOrderModalOpen
  ] = useState(false);

  return {
    authenticationOpen,
    setAuthenticationOpen,
    directOrderModalOpen,
    setDirectOrderModalOpen,
    authenticatedOrderModalOpen,
    setauthenticatedOrderModalOpen,
    passwordResetRequestOpen,
    setPasswordResetRequestOpen,
    profilePictureModalopen,
    setProfilePictureModalopen
  };
}
