import React from 'react';
import classes from './Conditions.module.css'

const Conditions = (props) => {
    
   return (
        
       <div className={classes.Container}>

            {props.error && <small>Please enter a valid city.</small>}
            {props.loading && <p>Loading...</p>}

            {props.responseObj.cod === 200 ?
                <div className={classes.weatherReport}>
                    <div className={classes.ReportLeft}>
                        <div className={classes.ReportText}>Location: </div>
                        <div className={classes.ReportText}>Temperature: </div>
                        <div className={classes.ReportText}>Humidity: </div>
                        <div className={classes.ReportText}>Conditions: </div>
                    </div>
                    <div className={classes.ReportRight}>
                        <div className={classes.ReportText}>{props.responseObj.name},  {props.responseObj.sys.country}</div>
                        <div className={classes.ReportText}>{Math.round(props.responseObj.main.temp)}</div>
                        <div className={classes.ReportText}>{props.responseObj.main.humidity}</div>
                        <div className={classes.ReportText}>{props.responseObj.weather[0].description}</div>
                    </div>
                </div>
            : null
            }
       </div>
   )
}

export default Conditions;