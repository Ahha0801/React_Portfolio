import React from "react";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

function Page({ currentPage }) {
  const renderPage = () => {
    switch (currentPage.name) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Projects />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;
      default:
        return <About />;
    }
  };

  return <main>{renderPage()}</main>;
}
export default Page;
