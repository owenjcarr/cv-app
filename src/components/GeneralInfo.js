import React, { Component } from "react" ;

class GeneralInfo extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.props.onInfoChange(event);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit();
  }

  render() {
    const { info } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
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

export default GeneralInfo;