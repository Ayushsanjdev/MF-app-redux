import React from "react";
import { render } from "react-dom";
import { AppLogin } from "./appLogin";

const mountLogin = (elementId) => {
  const renderElemement = document.getElementById(elementId);
  render(<AppLogin />, renderElemement);
};

window["mountLogin"] = mountLogin;

if (!window["micro-front-end-context"]) {
  mountLogin("app");
}
