import React from "react";
import Circle from './Circle'
import './SkillsCharts.css'
export default function SkillsCharts(props) {
  return (
    <div className="skillschart">
        <p className="heading2">{props.skill} - {props.method}</p>
        <div className="grid_second">
          <Circle value = "6.67" title="MAX" valuepercent="67"/>
          <Circle value="46" title="AVG" valuepercent="47" />
        </div>
    </div>
  );
}
