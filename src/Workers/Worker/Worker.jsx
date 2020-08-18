import React from 'react';
import styles from './Worker.module.css';

const Worker = (props) => {
    let styleWorkerList = [
        styles.worker,
        props.selectedWorker === props.data.id && styles.selectedWorker
    ].join(' ');
    
    return(
        <div className={styleWorkerList} onClick={() => props.selectWorker(props.data.id)}>
            <div>{props.data.fullName}</div>
            <div>{props.data.position}</div>           
            <div>{props.data.birthDay}</div>           
            <div>{props.data.gender}</div>           
            <div>{props.data.dismissed ? 'Уволен(а)' : 'Работает'}</div>           
        </div>
    )
}

export default Worker;