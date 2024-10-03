import { Outlet } from "react-router-dom";
import "./App.css";

import NavBar from "./Components/NavBar";
import Home from "./Components/Home.jsx";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Portfolio from "./Components/Portfolio";
import Social from "./Components/Social";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Social />
    </>
  );
}

export default App;
