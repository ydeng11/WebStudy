import React from "react";
import welcome from "./Welcome.module.css";

export default class Welcome extends React.Component {
  render() {
    return <div className={welcome.title}>Welcome!</div>;
  }
}
