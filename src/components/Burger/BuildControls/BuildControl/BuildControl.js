import React from 'react'
import './BuildControl.css'

const BuildControl = (props) => (

        <div className = 'BuildControl'>
            <div className = 'Label'>{props.label}</div>
            <button 
                className ='Less' o
                nClick={props.removed} 
                disabled={props.disabled}>Less
            </button>
            <button 
                className = 'More' 
                onClick={props.added}>More
            </button>
        </div>


)
    

export default BuildControl
