import { useState } from "react";

const ENVIRONMENT = process.env.NODE_ENV;

export function PlatformDetector() {
  const [isIos, setIsIos] = useState(iOS());
  const [isStandalone, setIsStandalone] = useState();
  const [isProduction, setIsProduction] = useState(production());
  const checkIfIos = () => {
    setIsIos(iOS());
  };
  const checkIfStandalone = () => {
    setIsStandalone(standalone());
  };
  const checkIfProduction = () => {
    setIsProduction(production());
  };

  return {
    isProduction,
    checkIfProduction,
    isIos,
    isStandalone,
    checkIfIos,
    checkIfStandalone
  };
}

function standalone() {
  //@ts-ignore
  if (navigator.standalone) {
    return true; // iOS
  }
  if (window.matchMedia("(display-mode: standalone)").matches) {
    return true; // Android with "display": "standalone" in Manifest
  }
  //@ts-ignore

  if (new URL(window.location).searchParams.has("homescreen")) {
    return true; // fallback to check for "?homescreen=1"
  }
  return false;
}

// iPad Optional?
function iOS() {
  return ["iPhone", "iPod", "iPad"].includes(navigator.platform);
}

function production() {
  return ENVIRONMENT === "production" ? true : false;
}
