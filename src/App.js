import React, { Component } from "react";
import CV from "./components/CV.js";
import GeneralInfo from "./components/GeneralInfo.js";
import Education from "./components/Education.js";
import uniqid from "uniqid";

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
      educationInfo: {
        education: {
          id: uniqid(),
          schoolName: "",
          major: "",
          start: "",
          end: "",
          gpa: "",
          display: true
        },
        educationList: []
      },

    }
    this.handleGeneralInfoChange = this.handleGeneralInfoChange.bind(this);
    this.handleEducationInfoChange = this.handleEducationInfoChange.bind(this);
    this.toggleGeneralInfoDisplay = this.toggleGeneralInfoDisplay.bind(this);
    this.toggleEducationInfoDisplay = this.toggleEducationInfoDisplay.bind(this);
    this.handleEducationSubmit =this.handleEducationSubmit.bind(this);
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

  handleEducationInfoChange(event) {
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

  handleEducationSubmit() {
    this.setState(prevState => ({
      ...prevState,
      educationInfo: {
        educationList: this.state.educationInfo.educationList.concat(this.state.educationInfo.education),
        education: {
          id: uniqid(),
          schoolName: "",
          major: "",
          start: "",
          end: "",
          gpa: "",
          display: true
        },
      }
    }));
  }

  toggleEducationInfoDisplay() {
    this.setState(prevState => ({
      ...prevState,
      education: {
        ...prevState.education,
        display: !this.state.educationInfo.education.display
      }
    }))
  }

  render() {
    console.log(this.state.educationInfo.educationList);
    return (
      <div>
        {
          this.state.generalInfo.display
          ?
            <GeneralInfo 
              info={this.state.generalInfo}
              onInfoChange={this.handleGeneralInfoChange}
              onSubmit={this.toggleGeneralInfoDisplay}
            />
          : null
        }
        {
          this.state.educationInfo.education.display
          ?
            <Education
              info={this.state.educationInfo.education}
              onInfoChange={this.handleEducationInfoChange}
              onSubmit={this.handleEducationSubmit}
            />
          : null
        }
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
