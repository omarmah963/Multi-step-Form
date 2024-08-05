import React, { Component } from "react";
import ThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
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
    const {
      values: { firstName, lastName, email, occupation, bio, city },
    } = this.props;
    return (
      <ThemeProvider>
        <AppBar title="Confirm User Data" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <List>
            <ListItem primaryText="First Name" secondaryText={firstName} />
            <ListItem primaryText="Last Name" secondaryText={lastName} />
            <ListItem primaryText="Email" secondaryText={email} />
            <ListItem primaryText="Occupation" secondaryText={occupation} />
            <ListItem primaryText="Bio" secondaryText={bio} />
            <ListItem primaryText="City" secondaryText={city} />
          </List>
          <div>
            <RaisedButton title="Click" label="Back" onClick={this.previous} />
            <RaisedButton
              title="Click"
              label="Confirm"
              primary={true}
              onClick={this.continue}
              style={{ marginLeft: "10px" }}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default FormPersonalDetails;
