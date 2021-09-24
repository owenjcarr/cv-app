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
        display: true
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
    this.handleChangeGeneral = this.handleChangeGeneral.bind(this);
    this.toggleDisplayGeneral = this.toggleDisplayGeneral.bind(this);

    this.handleChangeEducation = this.handleChangeEducation.bind(this);
    this.toggleDisplayEducation = this.toggleDisplayEducation.bind(this);
    this.addEducation = this.addEducation.bind(this);
    this.deleteEducation = this.deleteEducation.bind(this);
  }

  handleChangeGeneral(event) {
    const {name, value} = event.target;

    this.setState(prevState => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        [name]: value
      }
    }))
  }

  toggleDisplayGeneral() {
    this.setState(prevState => ({
      ...prevState,
      generalInfo: {
        ...prevState.generalInfo,
        display: !this.state.generalInfo.display
      }
    }))
  }

  handleChangeEducation(event, id) {
    const {name, value} = event.target;
    this.setState(prevState => {
      const updatedEducation = prevState.education.map(education => {
        if (education.id === id) {
          return {...education, [name] : value }
        }
        return education
      })
      return {...prevState, education: [...updatedEducation]} 
    })

  }

  toggleDisplayEducation(id) {
    this.setState(prevState => {
      const updatedEducation = prevState.education.map(education => {
        if (education.id === id) {
          return {...education, display: !education.display }
        }
        return education
      })
      return {...prevState, education: [...updatedEducation]} 
    })

  }

  addEducation() {
    const newEducation = {
      id: uniqid(),
      schoolName: "",
      major: "",
      start: "",
      end: "",
      gpa: "",
      display: true
    }
    this.setState(prevState => {
      return {...prevState, education: [...prevState.education, newEducation]}
    })
  }
  
  deleteEducation(id) {
    this.setState(prevState => {
      const updatedEducation = prevState.education.filter(education => education.id !== id);
      return {...prevState, education: [...updatedEducation]}
    })
  }

  render() {
    return (
      <div>
        <Form 
          cvData={this.state}
          onChangeGeneral={this.handleChangeGeneral}
          onChangeEducation={this.handleChangeEducation}
          onSubmitGeneral={this.toggleDisplayGeneral}
          onSubmitEducation={this.toggleDisplayEducation}
        />
        <CV 
          cvData={this.state}
          editGeneral={this.toggleDisplayGeneral}
          editEducation={this.toggleDisplayEducation}
          deleteEducation={this.deleteEducation}
          addEducation={this.addEducation}
        />
      </div>
    );
  }
}

export default App;
