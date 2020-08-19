import React from 'react';
import styles from './Worker.module.css';

const Worker = (props) => {
    let styleWorkerList = [
        styles.worker,
        props.selectedWorker === props.data.id && styles.selectedWorker
    ].join(' ');    

    const dateFormatter = () => {
        return props.data.birthDay.split('-').reverse().join('.');
    }

    return(
        <div className={styleWorkerList} onClick={() => props.selectWorker(props.data.id)}>
            <table>
                <tr>
                    <td>ФИО</td>
                    <td className={styles.infoAlign}>{props.data.fullName}</td>                    
                </tr>
                <hr />
                <tr>
                    <td>Должность</td>
                    <td className={styles.infoAlign}>{props.data.position}</td>                    
                </tr>
                <hr />
                <tr>
                    <td>Дата рождения</td>
                    <td className={styles.infoAlign}>{dateFormatter()}</td>                    
                </tr>
                <hr />
                <tr>
                    <td>Пол</td>
                    <td className={styles.infoAlign}>{props.data.gender === 'male' ? 'Мужчина' : 'Женщина'}</td>                    
                </tr>
                <hr />
                <tr>
                    <td>Статус</td>
                    <td className={styles.infoAlign}>{props.data.dismissed ? 'Уволен(а)' : 'Работает'}</td>                    
                </tr>
            </table>
        </div>
    )
}

export default Worker;