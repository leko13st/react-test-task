import React from 'react';
import { connect } from 'react-redux';
import Workers from './Workers';
import { selectWorkerAC } from '../redux/workersReducer';

class WorkersContainer extends React.Component{
    debugger;
    render(){
        return <Workers workers={this.props.workers}
                        selectedWorker={this.props.selectedWorker}
                        selectWorker={this.props.selectWorker}
        />        
    }
}

const mapStateToProps = (state) => {
    return{
        workers: state.workersPage.workers,
        selectedWorker: state.workersPage.selectedWorker
    }
}

const mapDispatchToProps = {
    selectWorker: selectWorkerAC
}

export default connect(mapStateToProps, mapDispatchToProps)(WorkersContainer);