import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import ThemeProvider from "material-ui/styles/MuiThemeProvider";

export class FormSuccess extends Component {
  render() {
      return (
          <ThemeProvider >
          <>
        <AppBar title='Success' />
      <div style={{ height:'100vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h1>the information has been sended</h1>
        <h3>We will contact you for further details</h3>
      </div></></ThemeProvider>
    )
  }
}

export default FormSuccess
