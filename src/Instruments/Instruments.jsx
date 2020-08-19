import React from 'react';
import styles from './Instruments.module.css';

const Instruments = (props) => {
    return(
        <div className={styles.instruments}>
            <div className={styles.buttonCenter}>
                <button onClick={props.addNewWorker}>Добавить</button>
            </div>
            <div className={styles.buttonCenter}>
                <button className={!props.selectedWorker && styles.hideButton} onClick={props.deleteSelectedWorker}>Удалить</button>
            </div>
        </div>
    )
}

export default Instruments;