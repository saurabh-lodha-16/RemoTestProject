import React from 'react';
import './App.css';
import Buttons from './Components/buttons/button';

var sectionStyle = {
  width: "100vw",
  height: "100vh",
  backgroundImage: "url('remo.jpg')",
  backgroundRepeat: "no-repeat",

};
function App() {
  return (

    <div className="App">
      <section style={sectionStyle}>
        <Buttons />
      </section>

    </div>
  );
}

export default App;
