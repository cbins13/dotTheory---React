import React, { Component } from "react";
import List from "./List";
class V16 extends Component {
  state = {
    hasError: false,
  };

  componentDidCatch() {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h1>Oh no! Something went wrong.</h1>
          <p>
            This component is rendered through an if else statement based on the
            state of a boolean called hasError.
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <h2>React v16.x</h2>
          <p>
            React introduced several features for v16. Released on Sept. 26,
            2017, the version 16 included some of the following:
          </p>
          <List />
        </div>
      );
    }
  }
}

export default V16;
