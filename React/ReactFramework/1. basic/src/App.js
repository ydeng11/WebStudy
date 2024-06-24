import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Hello from "./components/Hello/Hello";

// expose App Component
export default class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    );
  }
}
