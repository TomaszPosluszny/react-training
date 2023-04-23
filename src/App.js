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
        return ( 
        <>
        <h3>Hello {this.props.nameOne}</h3>
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
      export default class MyButton extends React.Component {
        handleClick = () => {alert(this.props.alert)}
        render() {
          return (
        <button onClick={this.handleClick}>{this.props.button}</button>
            )
          }
        }

        class MyNumberComponent extends React.Component {
          constructor(props) {
            super(props);
            this.state = { myNumber: 997 };
          }
        
          myClick() {
            if(this.state.myNumber > 0
           ){
            this.setState({ myNumber: this.state.myNumber - 100 })}
          }
          myClickOne() {
            this.setState({ myNumber: this.state.myNumber + 100 });
          }
          myClickReset() {
            this.setState({ myNumber: this.state.myNumber = 0 });
          }
        
          render() {
            console.log("render!");
            return (
              <div>
                <button onClick={this.myClick.bind(this)}>Minus 100 !</button>
                <button onClick={this.myClickOne.bind(this)}>Plus 100 !</button>
                <button onClick={this.myClickReset.bind(this)}>Reset</button>
               
                <p>My current number: {this.state.myNumber}</p>
              </div>
            );
          }
        }





export default class App extends React.Component {
  render() {
    const cars = ["Audi", "BMW", "Skoda", 'Mercedes']
    return (

      
      <div>

        <ol>
       {cars.map((car) => <li key={car}>{car}</li>)}
          </ol>
        <HelloWorldComponent/>
        <HelloWorldComponent/><hr/>
        <MyNumberComponent />
        <hr/>


        <MyButton button='Click me !' alert='Brawo !' />
       
        <MyButton button='Kliknij mnie !' alert='Świetnie !' />
        <MyButton/>
       
      <hr />
<GreetingsComponent/>

        <hr />
        <GreetNameComponent nameOne='Tomek' nameTwo='Ania' nameThree='Robert' nameFour='Patryk'/>

        <hr />
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
