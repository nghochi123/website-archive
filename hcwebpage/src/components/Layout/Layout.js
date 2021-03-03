import React from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.css'

const Layout = (props) => {
    let styles;
    if(props.inverse){
        styles = {color: "#ffffff"}
    }
    return (
        <div style={styles} className={props.larger?"layout-container larger" : "layout-container"}>
            <div className="layout-content">
                <Header inverse={props.inverse} title={props.title}/>
                {props.children}
            </div>
            <Footer/>
        </div>
    
    )
}

export default Layout;