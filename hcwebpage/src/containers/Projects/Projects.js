import React from 'react';
import {Container, Col, Row} from 'reactstrap';

import Layout from '../../components/Layout/Layout';
import ProjectCard from './ProjectCard/ProjectCard';

import styles from './Projects.module.css';

import weatherImg from '../../resources/weather.png';
import websiteImg from '../../resources/oldwebsite.png';
import asciiImg from '../../resources/ascii.png';
import burgerImg from '../../resources/burger.png';
import expressImg from '../../resources/expressheroku.png';
import sushiImg from '../../resources/sushi.png';


const Projects = props => {
    return (
        <Layout>
            <Container>
                <h1 className={styles.submaintext}>Personal Projects</h1>
                <Row>
                    <Col><ProjectCard img={weatherImg} link="https://sg-info-hc.netlify.app/" title="SG-info" text="An app that gets information from APIs online and presents them in a more human readable format" /></Col>
                    <Col><ProjectCard img={expressImg} link="https://express-server-test-hchc.herokuapp.com/" title="Express API endpoint" text="An express server holding information used in the SG Info app above. Access the endpoints with /weather and /bus/(buscode) or /bus/allbuses." /></Col>
                    <Col><ProjectCard img={burgerImg} link="https://hchcburger.netlify.app/" title="Burger App" text="A partially functional app that allows you to order virtual burgers online. The data is stored in Firebase. Made in a course on React." /></Col>
                </Row>
                <br/>
                <Row>
                    <Col><ProjectCard img={websiteImg} link="https://nghochi123.github.io/" title="Old Personal Webpage" text="My old webpage made with HTML, CSS and Bootstrap" /></Col>
                    <Col><ProjectCard img={asciiImg} link="https://www.youtube.com/watch?v=7qHKRo7rqhQ" title="Video to ASCII converter" text="Made a script with Python to convert frames into images and spam them in command line to simulate playing a video"/></Col>
                    <Col><ProjectCard img={sushiImg} link="https://www.youtube.com/watch?v=1PBlQ11OJVU" title="Sushi bot" text="Made a simple bot with Python to play Sushi Go Round."/></Col>
                </Row>
                <p className={styles.text}>All the stuff here and more random stuff can be found in my <a className={styles.link} href="https://github.com/nghochi123">GitHub</a></p>
            </Container>         
        </Layout>
    )
}

export default Projects;