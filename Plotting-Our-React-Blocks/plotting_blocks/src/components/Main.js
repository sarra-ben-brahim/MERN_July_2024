import React from 'react';
import styles from './BlocksStyle.module.css';


const Main = (props) => {
  return (
    <div className={styles.main}>{props.children}</div>
  )
}

export default Main