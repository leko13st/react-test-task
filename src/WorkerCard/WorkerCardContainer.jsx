import React from 'react';
import { connect } from 'react-redux';
import { selectWorkerAC, onFullNameChangedAC, onDismissedChangedAC, onPositionChangedAC, onBirthDayChangedAC, onGenderChangedAC } from '../redux/workersReducer';
import WorkerCard from './WorkerCard';
import EmptyWorkerCard from './EmptyWorkerCard';

class WorkerCardContainer extends React.Component{
    render(){
        if (this.props.selectedWorker)
            return <WorkerCard workers={this.props.workers}
                               selectedWorker={this.props.selectedWorker}
                               positions={this.props.positions}
                               selectWorker={this.props.selectWorker}

                               dataWorker={this.props.dataWorker}
                               onFullNameChanged={this.props.onFullNameChanged}
                               onPositionChanged={this.props.onPositionChanged}
                               onBirthDayChanged={this.props.onBirthDayChanged}
                               onGenderChanged={this.props.onGenderChanged}
                               onDismissedChanged={this.props.onDismissedChanged}
                               />        
        else 
            return <EmptyWorkerCard />
    }
}

const mapStateToProps = (state) => {
    return{
        workers: state.workersPage.workers,
        positions: state.workersPage.positions,
        selectedWorker: state.workersPage.selectedWorker,

        dataWorker: state.workersPage.dataWorker
    }
}

const mapDispatchToProps = {
    selectWorker: selectWorkerAC,
    onFullNameChanged: onFullNameChangedAC,
    onPositionChanged: onPositionChangedAC,
    onBirthDayChanged: onBirthDayChangedAC,
    onGenderChanged: onGenderChangedAC, 
    onDismissedChanged: onDismissedChangedAC
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerCardContainer);