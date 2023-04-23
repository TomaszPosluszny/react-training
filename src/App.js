import React from "react";

export default class HelloWorldComponent extends React.Component {
  render() {
    return ( <h1>Hello World !!!{2+2} ale super</h1>
      )
    }
  }

  export default class MyTextComponent extends React.Component {
    render() {
      return ( <p>Start editing to see some magic happen :)</p>
        )
      }
    }
    export default class GreetingsComponent extends React.Component {
      render() {
        return (
        <>
        <h2>I love React!</h2>
        <h2>I great technology!</h2>
        </>
          )
        }
      }
export default class App extends React.Component {
  render() {
    return (
      <div>
        <HelloWorldComponent/>
        <HelloWorldComponent/>
       

        <hr />

<GreetingsComponent/>
        <hr />

        <h3>Hello Wiktor!</h3>
        <h3>Hello Robert!</h3>
        <h3>Hello Magda!</h3>
        <h3>Hello Joanna!</h3>

        <hr />

        <MyTextComponent/>
      </div>
    );
  }
}
