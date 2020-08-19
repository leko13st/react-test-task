import React from 'react';
import { connect } from 'react-redux';
import Workers from './Workers';
import { selectWorkerAC } from '../redux/mainReducer';

class WorkersContainer extends React.Component{
    render(){
        return <Workers workers={this.props.workers}
                        positions={this.props.positions}
                        selectedWorker={this.props.selectedWorker}
                        selectWorker={this.props.selectWorker}
        />        
    }
}

const mapStateToProps = (state) => {
    return{
        workers: state.workersPage.workers,
        selectedWorker: state.workersPage.selectedWorker,
        positions: state.workersPage.positions
    }
}

const mapDispatchToProps = {
    selectWorker: selectWorkerAC
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkersContainer);