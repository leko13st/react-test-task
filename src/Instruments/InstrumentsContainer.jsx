import React from 'react';
import { connect } from 'react-redux';
import { deleteSelectedWorkedAC, addNewWorkerAC } from '../redux/workersReducer';
import Instruments from './Instruments';

class InstrumentsContainer extends React.Component{
    render(){
        return <Instruments deleteSelectedWorker={this.props.deleteSelectedWorker}
                            addNewWorker={this.props.addNewWorker}/>        
    }
}

const mapStateToProps = (state) => {
    return{
        workers: state.workersPage.workers
    }
}

const mapDispatchToProps = {
    deleteSelectedWorker: deleteSelectedWorkedAC,
    addNewWorker: addNewWorkerAC
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsContainer);