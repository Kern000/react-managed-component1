import React from "react";
import AskForNumber from "./AskForNumber";
import Answer from "./Answer";

export default class App extends React.Component {

    state = {
        number1: 0,
        number2: 0,
        total: 0
    };
  
  
    render(){
        return(
            <React.Fragment>
                <div className="App">
                <div>
                    <AskForNumber 
                        name1="number1"
                        name2="number2"
                        value1={this.state.number1}
                        value2={this.state.number2}
                        onChange={this.updateFormField}
                        add={this.addNumber}
                        />
                </div>
                    <Answer total={this.state.total}/>
                </div>
            </React.Fragment>
        )
    }

    updateFormField = (event) => {
        this.setState({
        [event.target.name]: event.target.value
        });
    };

    addNumber = () => {
        this.setState({
          total: parseFloat(this.state.number1) + parseFloat(this.state.number2)
        });
      };

}