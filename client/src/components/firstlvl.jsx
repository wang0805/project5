import React, { Component } from "react";
import { MyContext } from "../mycontext";
import SecLvl from "./seclvl";

class FirstLvl extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {context => <p>Username from first lvl: {context.state.username}</p>}
        </MyContext.Consumer>
        <SecLvl />
      </div>
    );
  }
}

export default FirstLvl;
