import React from "react";
import { ProjectCard } from "../ProjectCards";
import { Col, Container, Row, Tab } from "react-bootstrap";
import HangMan from "../../Images/HangMan.webp";
import Research from "../../Images/Research.jpeg";
import PSGen from "../../Images/PSGen.webp";
 

export const Project = () => {
  const projects = [
    {
      title: "HangMan",
      description:
        "Hangman Game in Python - Project Description The Hangman game is a classic word-guessing game that has been implemented as a basic Python project. This project is designed for beginners to improve their understanding of Python programming concepts such as loops, conditionals, functions, and string manipulation.",
      imgUrl: HangMan,
    },
    {
      title: "Password Generator Python Project",
      description:
        "Password Generator Project The Password Generator is a Python-based application designed to create secure and customizable passwords. It provides users with strong random passwords to enhance online security and protect sensitive information.",
      imgUrl: PSGen,
    },
    {
      title: "ELITE Research Project",
      description:
        "This research focuses on Reduced Graphene Oxide (RGO), a versatile and highly functional material derived from graphene oxide through various reduction processes. RGO has garnered significant attention due to its exceptional electrical, thermal, and mechanical properties, making it a promising candidate for a wide range of applications in nanotechnology, electronics, energy storage, and biomedicine.",
      imgUrl: Research,
    },
  ];

  return (
     
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2 className="section-title">Projects</h2>
            <p className="section-description">
              Explore a variety of projects that showcase my work and research.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
 
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard key={index} {...project} />
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
 
  );
};
