import React from 'react';
import styles from './WorkerCard.module.css';

const WorkerCard = (props) => {
    //debugger
    let positionList = props.positions.map(position => {
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
        <div className={styles.workerCard} dataWorker={props.dataWorker}>
            <form>
                <div onChange={onFullNameChanged}>
                    ФИО: <input type="text" placeholder="Заполните поле" value={props.dataWorker.fullName}/>
                </div>
                <div onChange={onPositionChanged}>
                    Должность: 
                    <select>
                        {positionList}
                    </select>   
                </div>
                <div onChange={onBirthDayChanged}>
                    Дата рождения: <input type="date" value={props.dataWorker.birthDay}/>
                </div>
                <div onChange={onGenderChanged}>
                    Пол: {gender()}
                </div>
                <div onChange={onDismissedChanged}>
                    Уволен: {idDismissed()}
                </div>
                <div>
                    Коллеги: 
                </div>
            </form>
        </div>
    )
}

export default WorkerCard;