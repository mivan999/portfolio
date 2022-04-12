import React from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';
import Skills from './skills/Skils';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

function App() {
  return (
    <div className="App">

        <Main/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
