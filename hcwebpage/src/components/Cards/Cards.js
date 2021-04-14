import React from 'react';
import {Container, Col, Row} from 'reactstrap';

import Card from './Card/Card';

import styles from './Cards.module.css';

import jsImg from '../../resources/js.jpg';
import reactImg from '../../resources/react.png';
import nodeImg from '../../resources/nodejs.png';
import expressImg from '../../resources/express.png';
import pythonImg from '../../resources/python.png';
import mysqlImg from '../../resources/sql.svg';
import gitImg from '../../resources/git.png';
import stataImg from '../../resources/stata.png';
import tsImg from '../../resources/Typescript_logo_2020.svg';
import mongoImg from '../../resources/mongodb.jpg';
import bootstrapImg from '../../resources/boostrap.png';
import materialImg from '../../resources/materialui.svg'

const Cards = (props) => {
    return (
        <Container>
            <Row className={styles.row}>
                <Col className={styles.column}><Card title="Javascript" image={jsImg}/></Col>
                <Col className={styles.column}><Card title="TypeScript" image={tsImg}></Card></Col>
                <Col className={styles.column}><Card title="Git" image={gitImg}></Card></Col>
                <Col className={styles.column}><Card title="React JS" image={reactImg}></Card></Col>
            </Row>
            <Row className={styles.row}>
                <Col className={styles.column}><Card title="Node JS" image={nodeImg}></Card></Col>
                <Col className={styles.column}><Card title="Express" image={expressImg}></Card></Col>
                <Col className={styles.column}><Card title="MongoDB" image={mongoImg}/></Col>
                <Col className={styles.column}><Card title="Material UI" image={materialImg}></Card></Col>
            </Row>
            <Row className={styles.row}>
                <Col className={styles.column}><Card title="BootStrap" image={bootstrapImg}></Card></Col>
                <Col className={styles.column}><Card title="Python" image={pythonImg}/></Col>
                <Col className={styles.column}><Card title="MySQL" image={mysqlImg}></Card></Col>
                <Col className={styles.column}><Card title="Stata" image={stataImg}></Card></Col>
            </Row>
        </Container>
    )
}

export default Cards;
