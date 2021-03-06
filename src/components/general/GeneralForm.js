import React, { Component } from "react" ;

class GeneralForm extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { info } = this.props;
    return (
      <div className="form-box">
        <form onSubmit={this.handleSubmit}>
          <label>Enter General Info</label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={info.firstName}
              onChange={this.handleChange}
            />
          <input 
            type="text"
            placeholder="Last Name"
            name="lastName"
            value={info.lastName}
            onChange={this.handleChange}
          />
          <input 
            type="email"
            placeholder="Email"
            name="email"
            value={info.email}
            onChange={this.handleChange}
          />
          <input 
            type="text"
            placeholder="Phone"
            name="phone"
            value={info.phone}
            onChange={this.handleChange}
          />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}

export default GeneralForm;