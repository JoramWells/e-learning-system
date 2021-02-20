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

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
