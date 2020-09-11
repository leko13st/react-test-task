import React from 'react';
import styles from './WorkerCard.module.css';

const WorkerCard = (props) => {
    let positionList = props.positions.map(position => {
            return (<option key={position} value={position}>{position}</option>)
        }
    )

    const onFullNameChanged = (event) => {
        props.onFullNameChanged(event.target.value);
    }

    const onPositionChanged = (event) => {        
        props.onPositionChanged(event.target.value);
    }

    const onBirthDayChanged = (event) => {
        props.onBirthDayChanged(event.target.value);
    }

    const onGenderChanged = (event) => {
        props.onGenderChanged(event.target.value);
    }

    const onDismissedChanged = (event) => {
        props.onDismissedChanged(event.target.checked);
    }

    return(
        <div className={styles.workerCard}>
            <table cellSpacing='0'>
                <tbody className={styles.blockLine}>                    
                    <tr>
                        <td>ФИО:</td>
                        <td className={styles.infoAlign}>
                            <span className={styles.necessaryItem}>* </span>
                            <input type="text" placeholder="Заполните поле" value={props.dataWorker.fullName} size="30" onChange={onFullNameChanged}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Должность:</td>
                        <td className={styles.infoAlign}>
                            <span className={styles.necessaryItem}>* </span>
                            <select value={props.dataWorker.position === '' ? 'init' : props.dataWorker.position} onChange={onPositionChanged}>
                                <option disabled value={'init'}>Укажите должность...</option>
                                {positionList}
                            </select>   
                        </td>
                    </tr>
                    <tr>
                        <td>Дата рождения:</td>
                        <td className={styles.infoAlign}><input type="date" value={props.dataWorker.birthDay} onChange={onBirthDayChanged}/></td>
                    </tr>
                    <tr onChange={onGenderChanged}>
                        <td>Пол:</td>
                        <td className={styles.infoAlign}>
                            <input checked={props.dataWorker.gender === 'male' ? true : false} readOnly name="gender" type="radio" value="male"/>Муж.
                            <input checked={props.dataWorker.gender === 'female' ? true : false} readOnly name="gender" type="radio" value="female"/>Жен.
                        </td>
                    </tr>
                    <tr>
                        <td>Статус:</td>
                        <td className={styles.infoAlign}>{props.dataWorker.dismissed ? 'Уволен' : 'Работает'} 
                                                         <input checked={props.dataWorker.dismissed} type="checkbox" onChange={onDismissedChanged}/>
                        </td>
                    </tr>
                    {/* <hr />
                    <tr>
                    <td>Коллеги:</td>
                    <td className={styles.infoAlign}></td>
                </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default WorkerCard;