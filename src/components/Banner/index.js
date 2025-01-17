import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import HeaderImage from "../../Images/Header.jpeg";
import "./Banner.css"
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "Web Designer", "Student"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]); // Dependency array includes `text`.

  const tick = () => {
    const i = loopNum % toRotate.length; // Proper modulo for array index
    const fullText = toRotate[i];
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="Banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Welcome to my Site</span>
            <h1>
              Hi, I'm Mukesh Kumar <span className="wrap">{text}</span>
            </h1>
            <p>
              Welcome to my portfolio website. Explore my work, experience, and
              projects. Stay connected for more updates!
            </p>
            <button>
            <a  
  href="https://github.com/mukeshkumar78370"
  target="_blank"
  rel="noopener noreferrer"
>

 

  Let's Connect <ArrowRightCircle size={25} />
  </a>
</button>

          </Col>
          <Col xs={10} md={5} xl={5}>
            <img
              src={HeaderImage}
              alt="Header-Img"
              className="img-fluid"
              style={{ borderRadius: "90%" }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
