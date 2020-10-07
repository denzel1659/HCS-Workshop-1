import React from "react";
import "./About.css";
import CutePic from "../../assets/bighappy.png";

export default function AboutScreen() {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture"/>
        </div>
        <div className="intro-item">
          To be replaced with interesting information soon. For now, enjoy this image of Mark and don't forget to follow my instagram
        </div>
      </div>
    </div>
  );
}
