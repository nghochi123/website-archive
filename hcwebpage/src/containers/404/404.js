import React from 'react';

import Layout from '../../components/Layout/Layout';

import styles from './Page404.module.css';

import {Container, Row, Col} from 'reactstrap';

const Page404 = props => {
    return (
        <Layout title="404">
            <Container>
                <Row>
                    <Col><p className={styles.Text}>Sorry, this page could not be found. Please try another link.</p></Col>                
                </Row>
            </Container>       
        </Layout>
    )
}

export default Page404;