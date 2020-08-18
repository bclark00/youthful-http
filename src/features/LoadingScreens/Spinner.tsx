import React from "react";
import logo from "../../assets/logos/Icon/Preconception_Filled_Logo-Main.svg";
import { Icon } from "./styledComponents";

export default function() {
  return (
    <div
      style={{
        display: "grid",
        alignItems: "center",
        justifyItems: "center",
        height: "100vh",
        width: "100vw"
      }}
    >
      <Icon src={logo} />
    </div>
  );
}
