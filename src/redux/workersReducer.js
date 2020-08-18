const DELETE_SELECTED_WORKER = 'DELETE_SELECTED_WORKER';
const SELECT_WORKER = 'SELECT_WORKER';

let initialState = {
    workers: [
        {id: 1, fullName: 'Иванов Иван Иванович', position: 'Директор', birthDate: '12.01.1980', gender: 'м', dismissed: false, colleagues: [4]},
        {id: 2, fullName: 'Цаль Виталий Олегович', position: 'Программист', birthDate: '03.04.1990', gender: 'м', dismissed: false, colleagues: [3]},
        {id: 3, fullName: 'Иванова Анна Алексеевна', position: 'Аналитик', birthDate: '06.08.1995', gender: 'ж', dismissed: false, colleagues: [2]},
        {id: 4, fullName: 'Козлов Александр Вадимович', position: 'HR', birthDate: '23.07.1987', gender: 'м', dismissed: true, colleagues: [1, 5]},
        {id: 5, fullName: 'Бодров Данила Сергеевич', position: 'Тестер', birthDate: '01.09.1998', gender: 'м', dismissed: false, colleagues: [4]}
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
    selectedWorker: null
}

const workersReducer = (state = initialState, action) => {
    switch (action.type){
        case DELETE_SELECTED_WORKER: {
            let index = -1;
            for (let i = 0; i < state.workers.length; i++)
                if (state.workers[i].id === state.selectedWorker){
                    index = i;
                    break
                }
            let array = state.workers.slice(0);
            array.splice(index, 1)

            return{
                ...state,
                workers: array,
                selectedWorker: null               
            }
        }
        case SELECT_WORKER: {
            return{
                ...state,
                selectedWorker: action.idWorker
            }
        }
        default:
            return state;
    }
}

export const deleteSelectedWorkedAC = () => ({type: DELETE_SELECTED_WORKER})
export const selectWorkerAC = (idWorker) => ({type: SELECT_WORKER, idWorker})

export default workersReducer;