import React from "react";
import { render } from "react-dom";
import { AppProfile } from "./appProfile";

const mountProfile = (elementId) => {
  const renderElemement = document.getElementById(elementId);
  render(<AppProfile />, renderElemement);
};

window["mountProfile"] = mountProfile;

if (!window["micro-front-end-context"]) {
  mountProfile("app");
}
