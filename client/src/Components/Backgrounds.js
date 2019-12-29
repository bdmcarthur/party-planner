import React from "react";
import img1 from "../images/wide/1.jpg";
import img2 from "../images/wide/2.jpg";
import img3 from "../images/wide/3.jpg";
import img4 from "../images/wide/4.jpg";
import img5 from "../images/wide/5.jpg";
import img6 from "../images/wide/6.jpg";

const Backgrounds = props => {
  return (
    <div class="container">
      <div class="row">
        <div class="col-md-2 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 1);
            }}
            className="w-100"
            alt="background"
            src={img1}
          ></img>
        </div>
        <div class="col-md-2 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 2);
            }}
            className="w-100"
            alt="background"
            src={img2}
          ></img>
        </div>
        <div class="col-md-2 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 3);
            }}
            className="w-100"
            alt="background"
            src={img3}
          ></img>
        </div>
        <div class="col-md-2 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 4);
            }}
            className="w-100"
            alt="background"
            src={img4}
          ></img>
        </div>
        <div class="col-md-2 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 5);
            }}
            className="w-100"
            alt="background"
            src={img5}
          ></img>
        </div>
        <div class="col-md-2 col-6">
          <img
            onClick={() => {
              props.handleClick("background", 6);
            }}
            className="w-100"
            alt="background"
            src={img6}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Backgrounds;