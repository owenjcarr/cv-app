import React, { Component } from "react";

class ExperienceForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event, id) {
    this.props.onChange(event, this.props.info.id);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.props.info.id);
  }

  render() {
    const { info } = this.props;
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          name="company"
          value={info.company}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="City"
          name="city"
          value={info.city}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="State"
          name="state"
          value={info.state}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Position"
          name="position"
          value={info.position}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="Start"
          name="start"
          value={info.start}
          onChange={this.handleChange}
        />
        <input
          type="text"
          placeholder="End"
          name="end"
          value={info.end}
          onChange={this.handleChange}
        />
        <textarea
          placeholder="description"
          name="description"
          value={info.description}
          onChange={this.handleChange}
        />
        <button>Submit</button>
      </form>
    )
  }
}

export default ExperienceForm