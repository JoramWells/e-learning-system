import React from "react";
import "./App.css";
import './bootstrap/css/bootstrap.min.css'

import NavBar from './Components/NavBar'
import NavHeader from "./Components/NavHeader";


class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <NavHeader />

      </>

    );
  }
}

export default App;
