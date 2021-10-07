import React from 'react'
import './Circle.css'
export default function Circle(props) {
    return (
<div>
        <div className="circle" style={{ background: `conic-gradient( purple ${props.valuepercent}%  , white 1% )` }}>
                  <div className="innercircle">
              <p className="value">{props.value}</p>
            </div>  
        </div>
            <p>{props.title}</p>
</div>
    )
}
