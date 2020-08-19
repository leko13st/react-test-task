import React from 'react';
import styles from './WorkerCard.module.css';

const WorkerCard = (props) => {
    let positionList = props.positions.map((position, index) => {
        if (index === 0)
            return (<option selected disabled value={position}>{position}</option>)
        
        if (props.dataWorker.position === position)
            return (<option selected value={position}>{position}</option>)        
        else
            return (<option value={position}>{position}</option>)
        }
    )

    let gender = () => {
        if (props.dataWorker.gender === 'male'){
            return (
                <>
                    <input checked name="gender" type="radio" value="male"/>Муж.
                    <input name="gender" type="radio" value="female"/>Жен.
                </>
            )
        }
        else if (props.dataWorker.gender === 'female') {
            return (
                <> 
                    <input name="gender" type="radio" value="male"/>Муж.
                    <input checked name="gender" type="radio" value="female"/>Жен.
                </>
            )
        }   
    }

    let idDismissed = () => {
        if (props.dataWorker.dismissed)
            return <input checked type="checkbox"/>
        else 
            return <input type="checkbox"/>
    }

    const onFullNameChanged = (event) => {
        props.onFullNameChanged(event.target.value, event.target.value ? false : true);
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
        <div className={styles.workerCard} dataWorker={props.dataWorker}>
            <table>
                <tr onChange={onFullNameChanged}>
                    <td>ФИО:</td>
                    <td className={styles.infoAlign}>
                        <span className={styles.necessaryItem}>* </span>
                        <input type="text" placeholder="Заполните поле" value={props.dataWorker.fullName}/>
                    </td>
                </tr>
                <hr />
                <tr onChange={onPositionChanged}>
                    <td>Должность:</td>
                    <td className={styles.infoAlign}>
                        <span className={styles.necessaryItem}>* </span>
                        <select>
                            {positionList}
                        </select>   
                    </td>
                </tr>
                <hr />
                <tr onChange={onBirthDayChanged}>
                    <td>Дата рождения:</td>
                    <td className={styles.infoAlign}><input type="date" value={props.dataWorker.birthDay}/></td>
                </tr>
                <hr />
                <tr onChange={onGenderChanged}>
                    <td>Пол:</td>
                    <td className={styles.infoAlign}>{gender()}</td>
                </tr>
                <hr />
                <tr onChange={onDismissedChanged}>
                    <td>Статус:</td>
                    <td className={styles.infoAlign}>{props.dataWorker.dismissed ? 'Уволен' : 'Работает'} {idDismissed()}</td>
                </tr>
                <hr />
                <tr>
                    <td>Коллеги:</td>
                    <td className={styles.infoAlign}></td>
                </tr>
            </table>
        </div>
    )
}

export default WorkerCard;