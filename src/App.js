import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Portfolio</h1>
      </header>
      <main>
        <section>
          <h2>About Me</h2>
          <p>
            Welcome to my portfolio! I am a passionate web developer with experience in React, JavaScript, HTML, and CSS.
          </p>
        </section>
        <section>
          <h2>Projects</h2>
          <ul>
            <li>
              <h3>Project 1</h3>
              <p>Description of Project 1</p>
            </li>
            <li>
              <h3>Project 2</h3>
              <p>Description of Project 2</p>
            </li>
            <li>
              <h3>Project 3</h3>
              <p>Description of Project 3</p>
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact</h2>
          <p>
            You can reach me at email@example.com or find me on LinkedIn.
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
