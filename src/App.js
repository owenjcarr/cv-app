import React, { Component } from "react";
import CV from "./components/CV.js";
import GeneralInfo from "./components/GeneralInfo.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        display: true
      },
    }
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.toggleGeneralInfoDisplay = this.toggleGeneralInfoDisplay.bind(this);
  }

  handleGeneralInfoChange(event) {
    const {name, value} = event.target;

    this.setState(prevState => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value
      }
    }))
  }

  toggleGeneralInfoDisplay() {
    this.setState(prevState => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        display: !this.state.generalInfo.display
      }
    }))
  }

  render() {
    return (
      <div>
        {this.state.generalInfo.display
          ?
            <GeneralInfo 
              info={this.state.generalInfo}
              onInfoChange={this.handleGeneralInfoChange}
              onSubmit={this.toggleGeneralInfoDisplay}
            />
          : null
        }
        <CV info={this.state.generalInfo} edit={this.toggleGeneralInfoDisplay}/>
      </div>
    );
  }
}

export default App;
