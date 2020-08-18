const DELETE_SELECTED_WORKER = 'DELETE_SELECTED_WORKER';
const SELECT_WORKER = 'SELECT_WORKER';
const ON_FULL_NAME_CHANGED = 'ON_FULL_NAME_CHANGED';

let initialState = {
    workers: [
        {id: 1, fullName: 'Иванов Иван Иванович', position: 'Директор', birthDay: '1976-08-15', gender: 'male', dismissed: false, colleagues: [4]},
        {id: 2, fullName: 'Цаль Виталий Олегович', position: 'Программист', birthDay: '1991-01-19', gender: 'male', dismissed: false, colleagues: [3]},
        {id: 3, fullName: 'Иванова Анна Алексеевна', position: 'Аналитик', birthDay: '1998-07-21', gender: 'female', dismissed: false, colleagues: [2]},
        {id: 4, fullName: 'Козлов Александр Вадимович', position: 'HR', birthDay: '1990-04-08', gender: 'male', dismissed: true, colleagues: [1, 5]},
        {id: 5, fullName: 'Бодров Данила Сергеевич', position: 'Тестер', birthDay: '1985-03-16', gender: 'male', dismissed: false, colleagues: [4]}
    ],
    positions: [
        'Директор',
        'Программист',
        'Аналитик',
        'HR',
        'Тестер',
        'Инженер',
        'Бухгалтер'
    ],
    selectedWorker: null,
    dataWorker: null
}

const workersReducer = (state = initialState, action) => {
    let index = -1;

    let findIndex = (idWorker) => { 
        for (let i = 0; i < state.workers.length; i++){
            if (state.workers[i].id === idWorker){
                index = i;
                break
            }
        }
    }
    
    switch (action.type){
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
            return{
                ...state,
                workers: [...state.workers],
                dataWorker: {...state.dataWorker, fullName: action.newFullName}
            }

        }
        default:
            return state;
    }
}

export const deleteSelectedWorkedAC = () => ({type: DELETE_SELECTED_WORKER});
export const selectWorkerAC = (idWorker) => ({type: SELECT_WORKER, idWorker});
export const onFullNameChangedAC = (newFullName) => ({type: ON_FULL_NAME_CHANGED, newFullName});

export default workersReducer;