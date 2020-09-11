import React from 'react';
import styles from './Worker.module.css';
import moment from 'moment';

const Worker = (props) => {
    //Суммирование css-классов
    let styleWorkerList = [
        styles.worker,
        props.data.invalid && styles.invalidWorker,
        props.selectedWorker === props.data.id && styles.selectedWorker,
    ].join(' ');

    //Форматирование даты в привычный вид ДД-ММ-ГГГГ
    const dateFormatter = () => {
        debugger
        return moment(props.data.birthDay).format('DD.MM.YYYY');
    }

    return(
        <div className={styleWorkerList} onClick={() => props.selectWorker(props.data.id)}>
            <table cellSpacing='0'>
                <tbody className={styles.blockLine}>                    
                    <tr>
                        <td>ФИО</td>
                        <td className={styles.infoAlign}>{props.data.fullName}</td>                    
                    </tr>
                    <tr>
                        <td>Должность</td>
                        <td className={styles.infoAlign}>{props.data.position === '' ? '' : props.data.position}</td>                    
                    </tr>
                    <tr>
                        <td>Дата рождения</td>
                        <td className={styles.infoAlign}>{dateFormatter()}</td>                    
                    </tr>
                    <tr>
                        <td>Пол</td>
                        <td className={styles.infoAlign}>{props.data.gender === 'male' ? 'Мужчина' : 'Женщина'}</td>                    
                    </tr>
                    <tr>
                        <td>Статус</td>
                        <td className={styles.infoAlign}>{props.data.dismissed ? 'Уволен(а)' : 'Работает'}</td>                    
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Worker;