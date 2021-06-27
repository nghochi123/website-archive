import React from "react";
import { Container, Col, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faBook } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/Layout/Layout";

import styles from "./Links.module.css";

const Projects = (props) => {
  return (
    <Layout>
      <h1 className={styles.submaintext}>Links</h1>
      <Container className={styles.cont}>
        <Row>
          <Col className={styles.col}>
            <a style={{ color: "#000" }} href="https://github.com/nghochi123">
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.github}`}
                icon={faGithub}
              />
              <p>GitHub</p>
            </a>
          </Col>
          <Col className={styles.col}>
            <a style={{ color: "#000" }} href="mailto:nghochi123@gmail.com">
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.mail}`}
                icon={faEnvelope}
              />
              <p>Email</p>
            </a>
          </Col>
          <Col className={styles.col}>
            <a
              style={{ color: "#000" }}
              href="https://www.linkedin.com/in/ng-ho-chi-809a881b9/"
            >
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.linkedin}`}
                icon={faLinkedin}
              />
              <p>Linkedin</p>
            </a>
          </Col>
          <Col className={styles.col}>
            <a style={{ color: "#000" }} href="https://hochi-blog.netlify.app/">
              <FontAwesomeIcon
                className={`${styles.icon} ${styles.mail}`}
                icon={faBook}
              />
              <p>Blog</p>
            </a>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};
export default Projects;
