import React, { Component } from "react";
import { ChatContainer } from "./containers/chat";
import "./App.css";
import { InputAreaContainer } from "./containers/inputArea";

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputAreaContainer />
        <ChatContainer />
      </div>
    );
  }
}
export default App;
