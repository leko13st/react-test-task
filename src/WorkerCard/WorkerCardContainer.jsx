import React from 'react';
import { connect } from 'react-redux';
import { selectWorkerAC } from '../redux/workersReducer';
import WorkerCard from './WorkerCard';

class WorkerCardContainer extends React.Component{
    debugger;
    render(){
        return <WorkerCard workers={this.props.workers}
                           selectedWorker={this.props.selectedWorker}
                           positions={this.props.positions}
                           selectWorker={this.props.selectWorker}
        />        
    }
}

const mapStateToProps = (state) => {
    return{
        workers: state.workersPage.workers,
        positions: state.workersPage.positions,
        selectedWorker: state.workersPage.selectedWorker
    }
}

const mapDispatchToProps = {
    selectWorker: selectWorkerAC
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerCardContainer);