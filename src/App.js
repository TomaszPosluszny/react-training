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
    export default class GreetNameComponent extends React.Component {
      render() {
        return ( <><h3>Hello {this.props.nameOne}</h3>
          <h3>Hello {this.props.nameTwo}</h3>
          <h3>Hello {this.props.nameThree}</h3>
          <h3>Hello {this.props.nameFour}</h3>
          
          </>
  
          )
        }
      }
      export default class GreetNameComponentTwo extends React.Component {
        render() {
          return ( 
            <h3>Hello {this.props.name} !</h3>
            
    
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
        <GreetNameComponent nameOne='Tomek' nameTwo='Ania' nameThree='Robert' nameFour='Patryk'/>
        <GreetNameComponentTwo name='Tomek' />
        <GreetNameComponentTwo name='Ania' />
        <GreetNameComponentTwo name='Robert' />
        <GreetNameComponentTwo name='Patryk' />
        
        <hr />

        <MyTextComponent/>
      </div>
    );
  }
}
