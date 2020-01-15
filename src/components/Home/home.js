import React from 'react';
//import NavButton from '../NavButton/navButton';
import './home.css';
import SearchButton2 from '../SearchButton/searchButton2';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

class Home extends React.Component{

    componentDidMount(){
        this.props.onFetchData();
      }  
    render(){

    return(
        <div className="container justify-content-center mt-5">
            
            <h1 className="text-dark">Tu clínica digital estes donde estes</h1>
            <p className="mb-5">Atencion por video consulta </p>
            
            <h3>Reserva tu cita ahora</h3>
            <SearchButton2/>
            {/*<SearchButton/>*/}
        </div>
    )}};


const mapDispatchToProps = dispatch => {
    return{
        onFetchData: () => dispatch(actionCreators.fetchData()),
    };
};

export default connect(null, mapDispatchToProps)(Home);

