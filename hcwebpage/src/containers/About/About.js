import React from 'react';
import {Container, Col, Row} from 'reactstrap';

import Layout from '../../components/Layout/Layout';
import Timeline from '../../components/Timeline/Timeline';
import Cards from '../../components/Cards/Cards';

import styles from './About.module.css';

const About = props => {
    return (
        <Layout>
            <Container>
                <h1 className={styles.submaintext}>Ng Ho Chi</h1>
                <Row>
                    <Col className={styles.text}>
                        <p>Self-taught and highly motivated, I'm a web developer aspiring to become a professional software developer in the future.</p>
                        <p>I'm interested in tech stuff and have found myself attracted to web and software development after seeing what my CCA mates were doing in their free time, and started learning on my own.</p>
                    </Col>
                </Row>
                <h2 className={styles.submaintext}>Skills and Interests</h2>
                <Cards/>
                <h2 className={styles.submaintext}>Milestones</h2>
                <Timeline/>
            </Container>
        </Layout>
    )
}

export default About;