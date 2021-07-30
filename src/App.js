import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
 return (
   <div className="App">
       <div id="AppTitle">Find Current Weather Conditions</div>
       <Forecast />
  

   </div>
 );
}

export default App;
