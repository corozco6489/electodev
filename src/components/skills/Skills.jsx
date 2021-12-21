import React from "react";
import "../../global.css";

export default function Skills() {
  return (
    <section className="skills mtop background2">
      <div className="container flex">
        <div className="left">
          <div className="heading">
            <div className="heading_top flex">
              <div className="line"></div>
              <div className="line line2"></div>
              <i className="fas fa-circle"></i>
              <h3> Expertise</h3>
            </div>
            <div className="heading_bottom">
              <h2>
                <span>My Skills & Tools </span>
              </h2>
            </div>
          </div>

          <div className="text">
            <h3>Every Day is a New Challenge</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.{" "}
            </p>

            <button className="btn2 btn3">Hire Me</button>
          </div>
        </div>

        <div className="right">
          <div className="line_content">
            <div className="line flex1">
              <p>ADOBE PHOTOSHOP</p>
              <div className="bar">
                <div className="line_bar html"> </div>
              </div>
              <h5>85</h5>
            </div>

            <div className="line">
              <p>ADOBE ILLUSTRATOR</p>
              <div className="bar">
                <div className="line_bar css"></div>
              </div>
              <h5>75</h5>
            </div>

            <div className="line">
              <p>ADOBE XD</p>
              <div className="bar">
                <div className="line_bar photo"> </div>
              </div>
              <h5>65</h5>
            </div>
          </div>

          <div className="skill-container flex1">
            <div className="circle_box">
              <svg className="skill-circle" height="150" width="150">
                <circle cx="-40" cy="10" r="48"></circle>
                <text
                  id="text1"
                  x="40"
                  y="100"
                  fill="#fff"
                  font-family="Verdana"
                  font-size="28"
                >
                  80
                </text>
              </svg>
              <h4>AFTER EFFECTS</h4>
            </div>

            <div className="circle_box">
              <svg className="skill-circle" height="150" width="150">
                <circle cx="-40" cy="10" r="48"></circle>
                <text
                  id="text1"
                  x="40"
                  y="100"
                  fill="#fff"
                  font-family="Verdana"
                  font-size="28"
                >
                  56
                </text>
              </svg>
              <h4>DREAM WEAVER </h4>
            </div>

            <div className="circle_box">
              <svg className="skill-circle" height="150" width="150">
                <circle cx="-40" cy="10" r="48"></circle>
                <text
                  id="text1"
                  x="40"
                  y="100"
                  fill="#fff"
                  font-family="Verdana"
                  font-size="28"
                >
                  60
                </text>
              </svg>
              <h4>HTML/JAVSCRIPT </h4>
            </div>

            <div className="circle_box">
              <svg className="skill-circle" height="150" width="150">
                <circle cx="-40" cy="10" r="48"></circle>
                <text
                  id="text1"
                  x="40"
                  y="100"
                  fill="#fff"
                  font-family="Verdana"
                  font-size="28"
                >
                  70
                </text>
              </svg>
              <h4>WORDPRESS </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
