import React from 'react';
import {Card, CardImg, CardText, CardTitle, CardImgOverlay, Button} from 'reactstrap';

import styles from './ProjectCard.module.css';

const ProjectCard = props =>{
    return (
        <>
            <Card style={{ backgroundColor: '#333', borderColor: '#333' }} className={styles.card} inverse>
                <a className={styles.a} href={props.link}>
                <CardImg width="100%" src={props.img} alt="Card image cap" />
                <CardImgOverlay>
                <CardTitle className={styles.title} tag="h5">{props.title}</CardTitle>
                <CardText className={styles.cardText}>{props.text}</CardText>
                </CardImgOverlay>
                </a>
            </Card>
            <Button 
                outline
                href={props.sc}
                color="primary" 
                size="sm" 
                block 
                style={{marginTop: '5px'}}
            >
                Source Code
            </Button>

        </>
        
    )
}

export default ProjectCard;