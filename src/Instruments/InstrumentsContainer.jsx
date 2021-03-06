import React from 'react';
import { connect } from 'react-redux';
import { deleteSelectedWorkedAC, addNewWorkerAC } from '../redux/mainReducer';
import Instruments from './Instruments';

class InstrumentsContainer extends React.Component{
    render(){
        return <Instruments deleteSelectedWorker={this.props.deleteSelectedWorker}
                            addNewWorker={this.props.addNewWorker}
                            selectedWorker={this.props.selectedWorker}/>        
    }
}

const mapStateToProps = (state) => {
    return{
        selectedWorker: state.workersPage.selectedWorker
    }
}

const mapDispatchToProps = {
    deleteSelectedWorker: deleteSelectedWorkedAC,
    addNewWorker: addNewWorkerAC
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsContainer);