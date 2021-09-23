import React, { Component } from "react";
import CV from "./components/CV.js";
import uniqid from "uniqid";
import Form from "./components/Form.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      generalInfo: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        display: false
      },
      education: [
        {
          id: uniqid(),
          schoolName: "",
          major: "",
          start: "",
          end: "",
          gpa: "",
          display: true
        },
      ]
    }
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleEducationInfoChange = this.handleEducationInfoChange.bind(this);
    this.toggleGeneralInfoDisplay = this.toggleGeneralInfoDisplay.bind(this);
    this.toggleEducationInfoDisplay = this.toggleEducationInfoDisplay.bind(this);
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

  // TODO: fix to handle new state format
  handleEducationInfoChange(event,) {
    const {name, value} = event.target;

    this.setState(prevState => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
        education: {
          ...prevState.educationInfo.education,
          [name]: value
        },
      }
    }))
  }

  // TODO: fix to handle new state format
  toggleEducationInfoDisplay() {
    this.setState(prevState => ({
      ...prevState,
      educationInfo: {
        ...prevState.educationInfo,
        education: {
          ...prevState.educationInfo.education,
          display: !this.state.educationInfo.education.display
        },
      }
    }))
  }

  render() {
    return (
      <div>
        <Form 
          cvData={this.state}
          handleGeneralInfoChange={this.handleGeneralInfoChange}
          handleEducationInfoChange={this.handleEducationInfoChange}
          onSubmitGeneral={this.toggleGeneralInfoDisplay}
          onSubmitEducation={this.toggleEducationInfoDisplay}
        />
        <CV 
          info={this.state}
          editGeneralInfo={this.toggleGeneralInfoDisplay}
          editEducationInfo={this.toggleEducationInfoDisplay}
        />
      </div>
    );
  }
}

export default App;
