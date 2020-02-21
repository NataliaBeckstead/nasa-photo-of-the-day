import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Photo from "./Components/MainSection/Content";

function App() {
  return (
    <div className="App">
      <Header/>
      <Photo/>
      <Footer/>
    </div>
  );
}

export default App;
