import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    { name: "About" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);
  const [currentPage, setCurrentPage] = useState(pages[0]);
  return (
    <div className="App">
      <Header />
      <Navbar
        pages={pages}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
      <Page className="page" currentPage={currentPage} />
      <Footer />
    </div>
  );
}

export default App;
