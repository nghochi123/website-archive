import React from 'react';
import {Container, Col, Row} from 'reactstrap';

import Layout from '../../components/Layout/Layout';
import ProjectCard from './ProjectCard/ProjectCard';

import styles from './Projects.module.css';

import weatherImg from '../../resources/weather.png';
import blogImg from '../../resources/blog.png';
import chatImg from '../../resources/chatapp.png'
import websiteImg from '../../resources/oldwebsite.png';
import asciiImg from '../../resources/ascii.png';
import burgerImg from '../../resources/burger.png';
import expressImg from '../../resources/expressheroku.png';
import sushiImg from '../../resources/sushi.png';
import graphImg from '../../resources/graph.png';


const Projects = props => {
    return (
        <Layout>
            <Container>
                <h1 className={styles.submaintext}>Personal Projects</h1>
                <h3 className={styles.text}>Click on the cards to view project demos (if any)</h3>
                <Row>
                    <Col><ProjectCard img={weatherImg} link="https://sg-info-hc.netlify.app/" sc="https://github.com/nghochi123/sg-info" title="SG-info" text="An app that gets information from APIs online and presents them in a more human readable format" /></Col>
                    <Col><ProjectCard img={blogImg} link="https://nghochi-blog.netlify.app/" sc="https://github.com/nghochi123/hc-blog" title="Blog website" text="A blog site built with Gatsby, using the React framework" /></Col>
                    <Col><ProjectCard img={chatImg} link="http://hchc-chat-app.herokuapp.com/" sc="https://github.com/nghochi123/chat-app" title="Real Time Chat App" text="An app that utilizes Web Sockets (using the socket.io npm module) to allow the real time exchange of information"/></Col>
                </Row>
                <br/>
                <Row>
                    <Col><ProjectCard img={burgerImg} link="https://hchcburger.netlify.app/" title="Burger App" sc="https://github.com/nghochi123/react-stuff/tree/master/burger-builder" text="A partially functional app that allows you to order virtual burgers online. The data is stored in Firebase. Made in a course on React." /></Col>
                    <Col><ProjectCard img={expressImg} link="https://express-server-test-hchc.herokuapp.com/" sc="https://github.com/nghochi123/express-server-test" title="Express API endpoint" text="An express server holding information used in the SG Info app above. Access the endpoints with /weather and /bus/(buscode) or /bus/allbuses." /></Col>
                    <Col><ProjectCard img={asciiImg} link="https://www.youtube.com/watch?v=7qHKRo7rqhQ" sc="https://github.com/nghochi123/python-stuff/tree/master/ascii-video" title="Video to ASCII converter" text="Made a script with Python to convert frames into images and spam them in command line to simulate playing a video"/></Col>
                </Row>
                <br/>
                <Row>
                    <Col><ProjectCard img={sushiImg} link="https://www.youtube.com/watch?v=1PBlQ11OJVU" sc="https://github.com/nghochi123/python-stuff/tree/master/SushiGoRound" title="Sushi bot" text="Made a simple bot with Python to play Sushi Go Round."/></Col>
                    <Col><ProjectCard img={websiteImg} link="https://nghochi123.github.io/" sc="https://github.com/nghochi123/nghochi123.github.io" title="Old Personal Webpage" text="My old webpage made with HTML, CSS and Bootstrap" /></Col>
                    <Col><ProjectCard img={graphImg} title="Data analysis and Graph plotting" sc="https://github.com/nghochi123/data" text="Created graphs in Python with Numpy, Matplotlib and Seaborn libraries. No link here."/></Col>
                </Row>
                <p className={styles.text}>Everything here and more can be found in my <a className={styles.link} href="https://github.com/nghochi123">GitHub</a></p>
            </Container>         
        </Layout>
    )
}

export default Projects;