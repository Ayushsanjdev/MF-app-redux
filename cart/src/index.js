import React from "react";
import { render } from "react-dom";
// import { AppProfile } from "./appProfile";

const mountCart = (elementId) => {
  const renderElemement = document.getElementById(elementId);
  render(<h1>cartapp</h1>, renderElemement);
};

window["mountCart"] = mountCart;

if (!window["micro-front-end-context"]) {
  mountCart("app");
}
