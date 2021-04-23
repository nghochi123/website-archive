import React from 'react';
import {Container, Col, Row} from 'reactstrap';

import Layout from '../../components/Layout/Layout';
import ProjectCard from './ProjectCard/ProjectCard';

import styles from './Projects.module.css';

import weatherImg from '../../resources/weather.png';
import blogImg from '../../resources/blog.png';
import chatImg from '../../resources/chatapp.png'
import visualisationImg from '../../resources/visualisation.png';
import dbImg from '../../resources/db.png'
import burgerImg from '../../resources/burger.png';

const Projects = props => {
    return (
        <Layout>
            <Container>
                <h1 className={styles.submaintext}>Personal Projects</h1>
                <h3 className={styles.text}>Click on the cards to view project demos (if any)</h3>
                <Row>
                    <Col><ProjectCard img={visualisationImg} link="https://hcvisualisation.netlify.app/" sc="https://github.com/nghochi123/visualizer" title="Algorithm Visualisation Tool" text="An algorithm visualisation tool that currently only has 4 sorting algorithms" /></Col>
                    <Col><ProjectCard img={dbImg} link="https://dbvis.vercel.app/" sc="https://github.com/nghochi123/dbvis" title="Database Visualisation" text="A database diagram builder that can help visualise data relationships between tables in a relational database"/></Col>
                    <Col><ProjectCard img={chatImg} link="http://hchc-chat-app.herokuapp.com/" sc="https://github.com/nghochi123/chat-app" title="Real Time Chat App" text="An app that utilizes Web Sockets (using the socket.io npm module) to allow the real time exchange of information"/></Col>
                </Row>
                <br/>
                <Row>
                    <Col><ProjectCard img={weatherImg} link="https://sg-info-hc.netlify.app/" sc="https://github.com/nghochi123/sg-info" title="SG-info" text="An app that gets information from APIs online and presents them in a more human readable format" /></Col>
                    <Col><ProjectCard img={blogImg} link="https://nghochi-blog.netlify.app/" sc="https://github.com/nghochi123/hc-blog" title="Blog website" text="A blog site built with Gatsby, using the React framework" /></Col>
                    <Col><ProjectCard img={burgerImg} link="https://hchcburger.netlify.app/" title="Burger App" sc="https://github.com/nghochi123/react-stuff/tree/master/burger-builder" text="A partially functional app that allows you to order virtual burgers online. The data is stored in Firebase. Made in a course on React." /></Col>
                </Row>
                <p className={styles.text}>Everything here and more can be found in my <a className={styles.link} href="https://github.com/nghochi123">GitHub</a></p>
            </Container>         
        </Layout>
    )
}

export default Projects;