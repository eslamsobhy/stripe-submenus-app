import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Sidebar from "./Sidebar";
import Submenu from "./Submenu";
function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Submenu />
      <Hero />
    </>
  );
}

export default App;
