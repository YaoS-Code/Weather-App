import React from 'react';
import './AppBonus.css';
import ForecastBonus from "./components/ForecastBonus/ForecastBonus";

function AppBonus() {
 return (
   <div className="AppBonus">
     <div className="AppLeft">
       <div id="AppTitle">Weather Finder Bonus</div>
       <div id="AppText">Find out temperature, conditions and more</div>
     </div>
     <div className="AppRight">
       <ForecastBonus />
     </div>

   </div>
 );
}

export default AppBonus;
