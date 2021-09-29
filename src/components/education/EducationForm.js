import React, { Component } from "react";

class EducationForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event, this.props.info.id);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.info.id);
  }

  render() {
    const { info } = this.props;
    return (
      <form className="form-box" onSubmit={this.handleSubmit}>
        <label>Enter Education</label>
        <input 
          type="text"
          placeholder="School Name"
          name="schoolName"
          value={info.schoolName}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          placeholder="Major"
          name="major"
          value={info.major}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          placeholder="Start Date"
          name="start"
          value={info.start}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          placeholder="End Date"
          name="end"
          value={info.end}
          onChange={this.handleChange}
        />
        <input 
          type="text"
          placeholder="GPA"
          name="gpa"
          value={info.gpa}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default EducationForm;