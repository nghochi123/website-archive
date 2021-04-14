import React from 'react';
import {Container, Col, Row, Button} from 'reactstrap';

import image from '../../resources/montreal.jpg';
import Layout from '../../components/Layout/Layout';
import styles from './Home.module.css';

const Home = props => {
    return (
        <Layout>
            <Container>
                <img className={styles.as} src={image} alt=""/>
                <Row>
                    <Col className={styles.ds}><img className={styles.image} src={image} alt=""/></Col>
                    <Col className={styles.flex}>
                        <p className={styles.HomeText}>Hi, I'm Ho Chi</p>
                        <p className={styles.text}>I'm an incoming undergraduate at Nanyang Technological University studying Computer Science 
                        under the CN Yang Scholarship. </p>
                        <p className={styles.text}>Looking for internship opportunities or projects to collaborate on wherever possible.</p>
                        <Button href='/resources/resume.docx' target="_blank" download size="lg" block style={{backgroundColor: '#2980b9', marginTop: '15px'}}>Download Resume</Button>
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Home;