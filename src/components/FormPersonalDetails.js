import React, { Component } from "react";
import ThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export class FormPersonalDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  previous = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <ThemeProvider>
        <AppBar title='Enter Personal Details' />
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <TextField
          hintText="Enter Your occupation"
          floatingLabelText="Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
        />
        <br />
        <TextField
          hintText="Enter Your city"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter Your bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br /><div >
          <RaisedButton
            title="Click"
            label="back"
            onClick={this.previous}
          />
        <RaisedButton
          title="Click"
          label="Continue"
          primary="true"
              onClick={this.continue}
              style={{marginLeft:'10px'}}
        /></div></div>
      </ThemeProvider>
    );
  }
}

export default FormPersonalDetails;
