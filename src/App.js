import React from 'react';
import './App.css';
import Buttons from './Components/buttons/button';

var sectionStyle = {
  width: "100%",
  height: "1080px",
  backgroundImage: "url('remo.jpg')"
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
