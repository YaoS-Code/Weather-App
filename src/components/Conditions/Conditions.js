import React from 'react';
import classes from './Conditions.module.css'

const Conditions = (props) => {
    
   return (
        
       <div className={classes.Container}>

            {props.error && <small>Please enter a valid city.</small>}
            {props.loading && <p>Loading...</p>}

            {props.responseObj.cod === 200 ?
                
            <div id={classes.Report}>
                It is currently {Math.round(props.responseObj.main.temp)} degrees out with {props.responseObj.weather[0].description}.
            </div>
        
            : null
            }
       </div>
   )
}

export default Conditions;