import React from "react";

export default class Tomek extends React.Component {
  render() {
    return (<button>Kliknij mnie</button>
      )
    }
  }
export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!!!</h1>
        <h1>Hej!!!</h1>

        <hr />
<Tomek/>
        <h2>I love React!</h2>
        <h2>I great technology!</h2>

        <hr />

        <h3>Hello Wiktor!</h3>
        <h3>Hello Robert!</h3>
        <h3>Hello Magda!</h3>
        <h3>Hello Joanna!</h3>

        <hr />

        <p>Start editing to see some magic happen :)</p>
      </div>
    );
  }
}
