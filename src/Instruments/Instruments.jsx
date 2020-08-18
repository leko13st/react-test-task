import React from 'react';
import styles from './Instruments.module.css';

const Instruments = () => {
    return(
        <div className={styles.instruments}>
            <button>Добавить</button>
            <button>Удалить</button>
        </div>
    )
}

export default Instruments;