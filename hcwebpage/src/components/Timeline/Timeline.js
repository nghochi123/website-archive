import React from 'react';

import TimelineItem from './TimelineItem/TimelineItem';


import styles from './Timeline.module.css'

const Timeline = (props) => {
    return (
        <div className={styles.timeline}>
            <ul>
                <TimelineItem title="Data Analyst Intern" time="Dec 2020" child={1}>Currently interning at MOH as a Data Analyst, handling information related to COVID operations. My team primarily uses Stata in our operations</TimelineItem>
                <TimelineItem title="National Service" time="2019-2020" child={2}>Served the nation for two years. Not the best time of my life, but happy to have been able to contribute. Started taking some online courses that interested me during my free time in NS.</TimelineItem>
                <TimelineItem title="Graduation from HCI" time="Oct 2018" child={1}>Graduated from HCI in October 2018, with the only thing left being A-levels</TimelineItem>
                <TimelineItem title="RoboCup Montreal" time="Jun 2018" child={2}>After clinching the championship title in Singapore, my team was offered an opportunity to represent Singapore in an international Robotics competition.</TimelineItem>
                <TimelineItem title="Enrolled in HCI" time="Jan 2017" child={1}>Got into HCI after doing well for my O-levels, and managed to join HCIRS, where my interest in building and creating developed.</TimelineItem>
                <div className={styles.clearBoth}></div>
            </ul>
        </div>
    )
}

export default Timeline;

