import React from 'react';
import * as actionCreators from '../../store/actions/actions';

//Redux- 10 importar connect
import {connect} from 'react-redux';

import { Button } from 'semantic-ui-react';
import * as actionTypes from '../../store/actions/actions';


 class Prueba extends React.Component{
    render(){
        return(
            
            <div className="container bg-light ">
                <h1>State: {this.props.ctr}</h1>
                <button onClick={this.props.onIncrementCounter} className=" mb-5 ui button"> Increment Counter</button>
                <button onClick={this.props.onDecrementCounter} className=" mb-5 ui button"> Decrement Counter</button>
                <button onClick={this.props.onMultiplieCounter} className=" mb-5 ui button"> Multiply Counter</button>
               
               <div>
                <button onClick={() => this.props.onResultCounter(this.props.ctr)} className=" mb-5 ui button"> Store Result</button>
                <ul>
                    {this.props.storedResult.map((item) => {
                    return <li key={item.id} onClick={() => this.props.deleteItem(item.id)}>{item.value}</li>
                    })}
                </ul>
                </div>
            
            </div>


        )
    };
};


//Redux - crear metodo para obtener el estado global.
const mapStateToProps = (state) => {
    return{
        ctr:state.ctr.counter,
        storedResult:state.res.results,
    };
}

//Redux - crear metodo para disparar acciones que seten el estado (al reducer)
const mapDispatchToProps = dispatch => {
    return{
        //onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT, val:10, name:"Aguchi"}),
        onIncrementCounter: () => dispatch(actionCreators.increment(10)),
        onDecrementCounter: () => dispatch(actionCreators.decrement(4)),
        onMultiplieCounter: () => dispatch(actionCreators.multiply(5)),
        onResultCounter: (result) => dispatch(actionCreators.storeResult(result)),
        deleteItem: (id) => dispatch(actionCreators.deleteItem(id))
    };
};

//Redux - conectar metodos (acciones) con la Store / Reducer.
export default connect(mapStateToProps,mapDispatchToProps)(Prueba);


