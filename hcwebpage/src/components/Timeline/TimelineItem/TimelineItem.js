import React from 'react';


import styles from './TimelineItem.module.css'

const TimelineItem = (props) => {
  let child = props.child === 1 ? styles.timeOdd : styles.timeEven
  let listStyle = props.child === 1 ? styles.listOdd : styles.listEven
  return (
      <li className={listStyle}>
          <div className={styles.content}>
          <h3>{props.title}</h3>
          <p>{props.children}</p>
          </div>
          <div className={child}>
          <p>{props.time}</p>
          </div>
      </li>
  )
}

export default TimelineItem;

