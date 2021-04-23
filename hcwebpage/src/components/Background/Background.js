import React from 'react';

import styles from './Background.module.css'

const Background = props => {
    return (
    <div style={{height:props.height || '100vh'}} className={styles.background}>
        {props.children}
    </div>
    )
};

export default Background;