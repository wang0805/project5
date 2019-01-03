import React, { Component } from "react";
import { MyContext } from "../mycontext";

class SecLvl extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => <p>Username from second lvl: {context.state.username}</p>}
        </MyContext.Consumer>
      </div>
    );
  }
}

export default SecLvl;
