import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"
import About from "./components/About"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <Navbar />
      <main>
      <About />
        <Projects />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
