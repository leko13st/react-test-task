import React from 'react';
import styles from './Instruments.module.css';

const Instruments = (props) => {
    return(
        <div className={styles.instruments}>
            <button onClick={props.addNewWorker}>Добавить</button>
            <button onClick={props.deleteSelectedWorker}>Удалить</button>
        </div>
    )
}

export default Instruments;