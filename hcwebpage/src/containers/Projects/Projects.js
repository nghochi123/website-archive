import React from "react";
import { Container, Col, Row } from "reactstrap";

import Layout from "../../components/Layout/Layout";
import ProjectCard from "./ProjectCard/ProjectCard";

import styles from "./Projects.module.css";

import weatherImg from "../../resources/weather.png";
import generationImg from "../../resources/generation.png";
import chatImg from "../../resources/chatapp.png";
import visualisationImg from "../../resources/visualisation.png";
import dbImg from "../../resources/db.png";
import boardImg from "../../resources/aniboard.png";

const Projects = (props) => {
  return (
    <Layout>
      <Container>
        <h1 className={styles.submaintext}>Personal Projects</h1>
        <Row>
          <Col>
            <ProjectCard
              img={visualisationImg}
              link="https://vis.nghochi.xyz/"
              sc="https://github.com/nghochi123/visualizer"
              title="Algorithm Visualisation Tool"
              text="An algorithm visualisation tool that currently has 4 sorting algorithms, as well as one pathfinding algorithm"
            />
          </Col>
          <Col>
            <ProjectCard
              img={boardImg}
              link="https://aniboard.vercel.app/"
              sc="https://github.com/nghochi123/aniboard"
              title="Anime Dashboard"
              text="An anime dashboard that utilises online APIs to display data of animes and characters"
            />
          </Col>
          <Col>
            <ProjectCard
              img={dbImg}
              link="https://dbvis.vercel.app/"
              sc="https://github.com/nghochi123/dbvis"
              title="Database Visualisation"
              text="A database diagram builder that can help visualise data relationships between tables in a relational database"
            />
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <ProjectCard
              img={chatImg}
              link="http://hchc-chat-app.herokuapp.com/"
              sc="https://github.com/nghochi123/chat-app"
              title="Real Time Chat App"
              text="An app that utilizes Web Sockets (using the socket.io npm module) to allow the real time exchange of information"
            />
          </Col>
          <Col>
            <ProjectCard
              img={weatherImg}
              link="https://sg-info-hc.netlify.app/"
              sc="https://github.com/nghochi123/sg-info"
              title="SG-info"
              text="An app that gets information from APIs online and presents them in a more human readable format"
            />
          </Col>
          <Col>
            <ProjectCard
              img={generationImg}
              link="https://www.youtube.com/watch?v=h_8WtiIeOTU"
              sc="https://github.com/BrainHack2021-Hackuna-Matata"
              title="Generation"
              text="A mobile app built during Brainhack 2021 to help elderly get accustomed to post-Covid life"
            />
          </Col>
        </Row>
        <p className={styles.text}>
          Everything here and more can be found in my{" "}
          <a className={styles.link} href="https://github.com/nghochi123">
            GitHub
          </a>
        </p>
      </Container>
    </Layout>
  );
};

export default Projects;
