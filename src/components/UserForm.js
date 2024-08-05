import React, { Component } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import FormConfirm from "./FormConfirm";
import FormSuccess from "./FormSuccess";
export class UserForm extends Component {
  //state fields
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  };
  //methods
  //proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  //go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };
  //handle fields change
  handleChange = (input) => (e) => {
    this.setState({
      [input]: e.target.value,
    });
  };
  render() {
    const { step, firstName, lastName, email, occupation, bio, city } =
      this.state;
    const values = { firstName, lastName, email, occupation, bio, city };
    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values} //values as a props
          />
        );
      case 2:
            return <FormPersonalDetails prevStep={this.prevStep} nextStep={this.nextStep} handleChange={this.handleChange} values={values}/>;
      case 3:
        return <FormConfirm prevStep={this.prevStep} nextStep={this.nextStep}  values={values}/>;
      case 4:
        return <FormSuccess prevStep={this.prevStep} nextStep={this.nextStep}  values={values}/>;
      default:
        return <h1>this is default case</h1>;
    }
  }
}

export default UserForm;
