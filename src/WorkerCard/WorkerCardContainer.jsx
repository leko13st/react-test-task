import React from 'react';
import { connect } from 'react-redux';
import { onFullNameChangedAC, onDismissedChangedAC, onPositionChangedAC, onBirthDayChangedAC, onGenderChangedAC } from '../redux/mainReducer';
import WorkerCard from './WorkerCard';
import EmptyWorkerCard from './EmptyWorkerCard';

class WorkerCardContainer extends React.Component{
    render(){
        if (this.props.selectedWorker)
            return <WorkerCard positions={this.props.positions}
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
        positions: state.workersPage.positions,
        dataWorker: state.workersPage.dataWorker,
        selectedWorker: state.workersPage.selectedWorker
    }
}

const mapDispatchToProps = {
    onFullNameChanged: onFullNameChangedAC,
    onPositionChanged: onPositionChangedAC,
    onBirthDayChanged: onBirthDayChangedAC,
    onGenderChanged: onGenderChangedAC, 
    onDismissedChanged: onDismissedChangedAC
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkerCardContainer);