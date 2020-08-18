import React from 'react';
import { connect } from 'react-redux';
import { deleteSelectedWorkedAC } from '../redux/workersReducer';
import Instruments from './Instruments';

class InstrumentsContainer extends React.Component{
    debugger;
    render(){
        return <Instruments deleteSelectedWorker={this.props.deleteSelectedWorker}/>        
    }
}

const mapStateToProps = (state) => {
    return{
        workers: state.workersPage.workers
    }
}

const mapDispatchToProps = {
    deleteSelectedWorker: deleteSelectedWorkedAC
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsContainer);