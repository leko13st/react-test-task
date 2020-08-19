const DELETE_SELECTED_WORKER = 'DELETE_SELECTED_WORKER';
const ADD_NEW_WORKER = 'ADD_NEW_WORKER';
const SELECT_WORKER = 'SELECT_WORKER';
const ON_FULL_NAME_CHANGED = 'ON_FULL_NAME_CHANGED';
const ON_POSITION_CHANGED = 'ON_POSITION_CHANGED';
const ON_BIRTH_DAY_CHANGED = 'ON_BIRTH_DATE_CHANGED';
const ON_GENDER_CHANGED = 'ON_GENDER_CHANGED';
const ON_DISMISSED_CHANGED = 'ON_DISMISSED_CHANGED';

let initialState = {
    //список сотрудников
    workers: [ 
        {id: 1, fullName: 'Иванов Иван Иванович', position: 'Директор', birthDay: '1976-08-15', gender: 'male', dismissed: false, colleagues: [4], invalid: false},
        {id: 2, fullName: 'Цаль Виталий Олегович', position: 'Программист', birthDay: '1991-01-19', gender: 'male', dismissed: false, colleagues: [3], invalid: false},
        {id: 3, fullName: 'Иванова Анна Алексеевна', position: 'Аналитик', birthDay: '1998-07-21', gender: 'female', dismissed: false, colleagues: [2], invalid: false},
        {id: 4, fullName: 'Козлов Александр Вадимович', position: 'HR', birthDay: '1990-04-08', gender: 'male', dismissed: true, colleagues: [1, 5], invalid: false},
        {id: 5, fullName: 'Бодров Данила Сергеевич', position: 'Тестер', birthDay: '1985-03-16', gender: 'male', dismissed: false, colleagues: [4], invalid: false}
    ],
    //Список должностей - отправляется в UI в комбобокс
    positions: [
        'Укажите должность...',
        'Директор',
        'Программист',
        'Аналитик',
        'HR',
        'Тестер',
        'Инженер',
        'Бухгалтер',
        'Стажёр'
    ],
    selectedWorker: null, //id выделеннего сотрудника
    dataWorker: null //данные выделенного сотрудника
}

const workersReducer = (state = initialState, action) => {
    let index = -1;
    //поиска свободного индекса для назначения его работнику
    let findIndex = (idWorker) => { 
        for (let i = 0; i < state.workers.length; i++){
            if (state.workers[i].id === idWorker){
                index = i;
                break
            }
        }
    }

    //Получить обновлённого данные работника
    let getUpdatedWorker = (property) => {
        let worker = null;
        state.workers.map(person => {
            if (person.id === state.selectedWorker)
                worker = person;
            return null;
        })

        if (property === "fullName")
            worker.fullName = action.newFullName;
        else if (property === "position")
            worker.position = action.newPosition;
        
        if (worker.fullName === '' || worker.position === state.positions[0])
            worker.invalid = true;
        else 
            worker.invalid = false;

        return worker;
    }

    //Получить обновлённый список данных работников
    let getUpdatedWorkers = (worker) => {
            return state.workers.map(workerItem => {
                if (workerItem.id === state.selectedWorker)
                    return worker;                    
                else
                    return workerItem;
            })
    }

    switch (action.type){
        //здесь обрабатываются диспатчи
        case DELETE_SELECTED_WORKER: {
            findIndex(state.selectedWorker);           
            let array = state.workers.slice(0);
            array.splice(index, 1)

            return{
                ...state,
                workers: array,
                selectedWorker: null               
            }
        }
        case ADD_NEW_WORKER: {
            let identify = () => {
                let lastWorker = state.workers[state.workers.length - 1];
                if (lastWorker)
                    return lastWorker.id + 1
                else return 1;
            }

            let newWorker = {
                id: identify(), 
                fullName: '', 
                position: state.positions[0],
                birthDay: '',
                gender: 'male',
                dismissed: false,
                invalid: true
            }
            return{
                ...state,
                workers: [...state.workers, newWorker],
                dataWorker: newWorker,
                selectedWorker: newWorker.id
            }
        }
        case SELECT_WORKER: {
            findIndex(action.idWorker);     
            let worker = state.workers.slice(0).splice(index, 1)[0]

            return{
                ...state,
                selectedWorker: action.idWorker,
                dataWorker: worker
            }
        }
        case ON_FULL_NAME_CHANGED: {
            
            let worker = getUpdatedWorker('fullName'); 

            return {
                ...state,
                workers: getUpdatedWorkers(worker),
                dataWorker: {...state.dataWorker, fullName: action.newFullName, invalid: worker.invalid}
            }
        }
        case ON_POSITION_CHANGED: {

            let worker = getUpdatedWorker('position');

            return{
                ...state,
                workers: getUpdatedWorkers(worker),
                dataWorker: {...state.dataWorker, position: action.newPosition, invalid: worker.invalid}
            }
        }
        case ON_BIRTH_DAY_CHANGED: {
            return{
                ...state,
                workers: state.workers.map(worker => {
                    if (worker.id === state.selectedWorker)
                        worker.birthDay = action.newDate;
                    return worker;
                }),
                dataWorker: {...state.dataWorker, birthDay: action.newDate}
            }
        }
        case ON_GENDER_CHANGED: {
            return{
                ...state,
                workers: state.workers.map(worker => {
                    if (worker.id === state.selectedWorker)
                        worker.gender = action.newGender;
                    return worker;
                }),
                dataWorker: {...state.dataWorker, gender: action.newGender}
            }
        }
        case ON_DISMISSED_CHANGED: {
            return{
                ...state,
                workers: state.workers.map(worker => {
                    if (worker.id === state.selectedWorker)
                        worker.dismissed = action.newDissmised;
                    return worker;
                }),
                dataWorker: {...state.dataWorker, dismissed: action.newDissmised}
            }
        }
        default:
            return state;
    }
}

export const deleteSelectedWorkedAC = () => ({type: DELETE_SELECTED_WORKER});
export const addNewWorkerAC = () => ({type: ADD_NEW_WORKER});
export const selectWorkerAC = (idWorker) => ({type: SELECT_WORKER, idWorker});
export const onFullNameChangedAC = (newFullName, isInvalid) => ({type: ON_FULL_NAME_CHANGED, newFullName, isInvalid});
export const onPositionChangedAC = (newPosition) => ({type: ON_POSITION_CHANGED, newPosition});
export const onBirthDayChangedAC = (newDate) => ({type: ON_BIRTH_DAY_CHANGED, newDate});
export const onGenderChangedAC = (newGender) => ({type: ON_GENDER_CHANGED, newGender});
export const onDismissedChangedAC = (newDissmised) => ({type: ON_DISMISSED_CHANGED, newDissmised});

export default workersReducer;