import React, { useState } from "react";
import CV from "./components/CV.js";
import uniqid from "uniqid";
import Form from "./components/Form.js";
import Header from "./components/Header.js";
import "./styles.css"

const App = () =>  {
  const cvData = {
    general: {
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
    ],
    experience: [
      {
        id: uniqid(),
        company: "",
        city: "",
        state: "",
        position: "",
        start: "",
        end: "",
        description: "",
        display: false
      },
    ],
  }

  const [cv, setCv] = useState(cvData);

  const handleChangeGeneral = (event) => {
    const { name, value } = event.target;

    setCv(prevState => ({
      ...prevState,
      general: {
        ...prevState.general,
        [name]: value
      }
    }))
  }

  const toggleDisplayGeneral = () => {
    setCv(prevState => ({
      ...prevState,
      general: {
        ...prevState.general,
        display: !cv.general.display
      }
    }))
  }

  const handleChangeEducation = (event, id) => {
    const { name, value } = event.target;

    setCv(prevState => {
      const updatedEducation = prevState.education.map(education => {
        if (education.id === id) {
          return { ...education, [name]: value }
        }
        return education
      })
      return { ...prevState, education: [...updatedEducation] }
    })

  }

  const toggleDisplayEducation = (id) => {
    setCv(prevState => {
      const updatedEducation = prevState.education.map(education => {
        if (education.id === id) {
          return { ...education, display: !education.display }
        }
        return education
      })
      return { ...prevState, education: [...updatedEducation] }
    })

  }

  const addEducation = () => {
    const newEducation = {
      id: uniqid(),
      schoolName: "",
      major: "",
      start: "",
      end: "",
      gpa: "",
      display: true
    }
    setCv(prevState => {
      return { ...prevState, education: [...prevState.education, newEducation] }
    })
  }

  const deleteEducation = (id) => {
    setCv(prevState => {
      const updatedEducation = prevState.education.filter(education => education.id !== id);
      return { ...prevState, education: [...updatedEducation] }
    })
  }

  const handleChangeExperience = (event, id) => {
    const { name, value } = event.target;

    setCv(prevState => {
      const updatedExperience = prevState.experience.map(experience => {
        if (experience.id === id) {
          return { ...experience, [name]: value }
        }
        return experience
      })
      return { ...prevState, experience: [...updatedExperience] }
    })

  }

  const toggleDisplayExperience = (id) => {
    setCv(prevState => {
      const updatedExperience = prevState.experience.map(experience => {
        if (experience.id === id) {
          return { ...experience, display: !experience.display }
        }
        return experience
      })
      return { ...prevState, experience: [...updatedExperience] }
    })

  }

  const addExperience = () => {
    const newExperience = {
      id: uniqid(),
      company: "",
      city: "",
      state: "",
      position: "",
      start: "",
      end: "",
      description: "",
      display: true
    }
    setCv(prevState => {
      return { ...prevState, experience: [...prevState.experience, newExperience] }
    })
  }

  const deleteExperience = (id) => {
    setCv(prevState => {
      const updatedExperience = prevState.experience.filter(experience => experience.id !== id);
      return { ...prevState, experience: [...updatedExperience] }
    })
  }

  return (
    <div>
      <Header />
      <div className="main-content">
        <div className="cv-container">
          <CV
            cvData={cv}
            editGeneral={toggleDisplayGeneral}
            editEducation={toggleDisplayEducation}
            deleteEducation={deleteEducation}
            addEducation={addEducation}
            editExperience={toggleDisplayExperience}
            deleteExperience={deleteExperience}
            addExperience={addExperience}
          />
        </div>
        <div className="form-container">
          <Form
            cvData={cv}
            onChangeGeneral={handleChangeGeneral}
            onChangeEducation={handleChangeEducation}
            onChangeExperience={handleChangeExperience}
            onSubmitGeneral={toggleDisplayGeneral}
            onSubmitEducation={toggleDisplayEducation}
            onSubmitExperience={toggleDisplayExperience}
          />
        </div>
      </div>
    </div>
  );
}


export default App;
