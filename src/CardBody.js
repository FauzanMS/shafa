import React from 'react'
import './CardBody.css'

import SkillsCharts from './SkillsCharts'
export default function cardBody() {
    return (
        <div className="cardBody">
            <div className="firstCol">
               <p className="heading">Consolidated Score</p>
               <p className="score">0.49</p>
               <p>Cases Solved 11</p>
               <p>Next Recommended Case :</p>
               <ul>
                   <li>
                       Ice Cream
                   </li>
                   <li>
                       Manufacturer
                   </li>
               </ul>
            </div>
            <div className="secondCol">
<SkillsCharts skill = "Top Skill" method="Scoping" />
<SkillsCharts skill = "Needy Skill" method="Analysis"/>
            </div>
        </div>
    )
}

