import React from 'react';
import { connect } from 'react-redux';
import Workers from './Workers';
import { selectWorkerAC } from '../redux/mainReducer';

class WorkersContainer extends React.Component{
    render(){
        return <Workers {...this.props}/>        
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