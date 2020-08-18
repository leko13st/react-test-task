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
        else {
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

    let fullNameText = React.createRef();

    const onFullNameChanged = () => {
        let fullName = fullNameText.current.value;
        props.onFullNameChanged(fullName);
    }

    const onPositionChanged = () => {
        let fullName = fullNameText.current.value;
        props.onPositionChanged(fullName);
    }

    const onBirthDayChanged = () => {
        let fullName = fullNameText.current.value;
        props.onBirthDayChanged(fullName);
    }

    const onGenderGhanged = () => {
        let fullName = fullNameText.current.value;
        props.onGenderGhanged(fullName);
    }

    const onDismissedChanged = () => {
        let fullName = fullNameText.current.value;
        props.onDismissedChanged(fullName);
    }

    return(
        <div className={styles.workerCard} dataWorker={props.dataWorker}>
            <form>
                <div onChange={onFullNameChanged}>
                    ФИО: <input type="text" placeholder="Заполните поле" ref={fullNameText} value={props.dataWorker.fullName}/>
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
                <div onChange={onGenderGhanged}>
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