import React from "react";
import { Container, Col, Row } from "reactstrap";

import Layout from "../../components/Layout/Layout";
import Timeline from "../../components/Timeline/Timeline";
import Cards from "../../components/Cards/Cards";

import styles from "./About.module.css";

const About = (props) => {
  return (
    <Layout>
      <Container>
        <h1 className={styles.submaintext}>Ng Ho Chi</h1>
        <Row>
          <Col className={styles.text}>
            <p>
              Self-taught and highly motivated, I'm a web developer aspiring to
              become a professional software developer in the future.
            </p>
            <p>
              My interests include web development, cybersecurity and data
              science.
            </p>
          </Col>
        </Row>
        <h2 className={styles.submaintext}>Skills and Interests</h2>
        <Cards />
        <h2 className={styles.submaintext}>Milestones</h2>
        <Timeline />
      </Container>
    </Layout>
  );
};

export default About;
