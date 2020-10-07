import React from "react";
import "./Education.css";
import Harvard from "../../assets/harvard.png";

function TimeLineItem(props) {
  return (
    <div
        onClick={() => {
            props.setActiveTitle(props.title);
        }}
    className="timeline-item">
      <h1>{props.title}</h1>
    </div>
  );
}

export default function EducationScreen() {
  const [activeTitle, setActiveTitle] = React.useState("BLANK");

  let dynamicContent = ''
  if (activeTitle == "Harvard University") {
    dynamicContent = (
      <div>
        <img src={Harvard} />
        <p>Information</p>
        <ul>
            <li>Class of 2024</li>
            <li>Concentration: Mechanical Engineering/Computer Science </li>
            <li>Secondary: Astronomy</li>
        </ul>
      </div>
    );
  }
  //let redTitle = activeTitle
  //{dynamicContent}
  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimeLineItem 
          title="Harvard University" 
          setActiveTitle={setActiveTitle}
          ></TimeLineItem>
        </div>
        <div className="highlight-background">
{dynamicContent}
        </div>
      </div>
    </div>
  );
}
