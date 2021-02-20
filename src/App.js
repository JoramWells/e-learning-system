import React from "react";
import "./App.css";
import './bootstrap/css/bootstrap.min.css'

import NavBar from './Components/NavBar'
import NavHeader2 from "./Components/NavHeader2";
import Taskbar from "./Components/Taskbar";
import Footer2 from './Components/Footer2'


class App extends React.Component {
  render() {
    return (
      <>
      <NavBar />
      <NavHeader2 />
      <Taskbar />
      <Footer2 />

      </>

    );
  }
}

export default App;
