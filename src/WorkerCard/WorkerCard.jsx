import React from 'react';
import styles from './WorkerCard.module.css';

const WorkerCard = (props) => {
    debugger
    let positionList = props.positions.map(position => <option value={position}>{position}</option>)

    return(
        <div className={styles.workerCard} dataWorker={props.dataWorker}>
            <form action="">
                <div>ФИО<input type="text" placeholder="Заполните поле"/></div>
                <div>
                    Должность
                    <select>
                        {positionList}
                    </select>
                </div>
                <div>ФИО<input type="text" placeholder="Заполните поле"/></div>
                <div>ФИО<input type="text" placeholder="Заполните поле"/></div>
                <div>ФИО<input type="text" placeholder="Заполните поле"/></div>

            </form>
        </div>
    )
}

export default WorkerCard;