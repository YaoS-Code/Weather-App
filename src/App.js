import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
 return (
   <div className="App">
     <div className="AppLeft">
       <div id="AppTitle">Weather Finder</div>
       <div id="AppText">Find out temperature, conditions and more</div>
     </div>
     <div className="AppRight">
       <Forecast />
     </div>

   </div>
 );
}

export default App;
