import React from "react";
import { Col, Container } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Reactlogo from "../../Images/React.png";
import JS from "../../Images/javaScript.png";
import FrontEnd from "../../Images/Front-end.jpeg";
import Python from "../../Images/Python.jpg";
import "./Skills.css"

export const Skills = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
    }
  }
  
  return (
    <section className="skill" id="skills">
      <Container>
        <Col>
          <div className="skill-box">
            <h2>Skills</h2>
            <p>
              Here are some of the technical skills I have acquired over the
              years, including programming languages, frameworks, and
              front-end development expertise.
            </p>
            <Carousel partialVisible={true} responsive={responsive} infinite={true}
              className="skill-slider"
            >
              <div className="item">
                <img src={Reactlogo} alt="React Logo" />
                <h5>React</h5>
              </div>
              <div className="item">
                <img src={FrontEnd} alt="Front-End Development" />
                <h5>Web Developer</h5>
              </div>
              <div className="item">
                <img src={JS} alt="JavaScript Logo" />
                <h5>JavaScript</h5>
              </div>
              <div className="item">
                <img src={Python} alt="Python Logo" />
                <h5>Python</h5>
              </div>
            </Carousel>
          </div>
        </Col>
      </Container>
    </section>
  );
};
