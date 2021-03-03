import React from 'react';
import {Container, Row, Col} from 'reactstrap';

import './Footer.css'

const Footer = (props) => {
    return (
        <Container>
            <Row>
                <Col><p className="footer-p">Created by Ho Chi</p></Col>
                <Col><p className="alignRight">2021</p></Col>
            </Row>
        </Container>
        
    )
}

export default Footer;