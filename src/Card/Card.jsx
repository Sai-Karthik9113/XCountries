import React from "react";
import styles from './Card.module.css';

const Flag = ({ name, flag }) => {

    return (
        <div className={styles.card}>
            <img className={styles.flagImage} src={flag} alt={`Flag of ${name}`} />
            <h3 style={{ margin: '10px' }}>{name}</h3>
        </div>
    )
};

export default Flag;