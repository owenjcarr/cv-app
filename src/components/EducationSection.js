import React from "react" ;
import EducationBlock from "./EducationBlock";

function EducationSection(props) {
  const {info, edit} = props;
  const educationList = info.educationInfo.educationList;

  const educationListComponents = educationList.map(education => {
    return (
      <EducationBlock 
      schoolName = {education.schoolName}
      start = {education.start}
      end = {education.end}
      major = {education.major}
      gpa = {education.gpa}
      edit = {edit}
      />
    )
  })

  return (
    <div>
      <h1>Education</h1>
      <button>Add</button>
      {educationListComponents}
    </div>
  )
  
}

export default EducationSection;