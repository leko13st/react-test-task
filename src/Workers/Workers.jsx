import React from 'react';
import styles from './Workers.module.css';
import Worker from './Worker/Worker';

const Workers = (props) => {

    const selectWorker = (id) => {
        props.selectWorker(id);
    }

    let workerList = props.workers.map(worker => <Worker data={worker}
                                                         selectedWorker={props.selectedWorker}
                                                         selectWorker={selectWorker}
    />)

    return(
        <div className={styles.workers}>
            {workerList}
        </div>
    )
}

export default Workers;