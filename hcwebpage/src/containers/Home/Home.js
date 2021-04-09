import React from 'react';

import Layout from '../../components/Layout/Layout';

import styles from './Home.module.css';

import image from '../../resources/montreal.jpg';

import {Container, Col, Row} from 'reactstrap';

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
                    </Col>
                </Row>
            </Container>
        </Layout>
    )
}

export default Home;