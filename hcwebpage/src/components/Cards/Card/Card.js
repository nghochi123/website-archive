import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import styles from './Card.module.css';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <Container className={styles.container}>
                <Row>
                    <Col sm="4"><img className={styles.image} src={props.image} alt=""/></Col>
                    <Col sm="8"><p className={styles.text}>{props.title}</p></Col>
                </Row>
            </Container>
        </div>
    )
}

export default Card;


 