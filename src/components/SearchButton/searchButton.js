import React from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';
import * as actionTypes from '../../store/actions/actions';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  

class SearchButton extends React.Component{

  showResult = (array) => {
    return alert("Usted busco: " + this.props.searchedValue + ". Resutados: " + this.props.searchedArray )
  }
  

  render(){
 
    return(
        <div>
          <div className="ui grid justify-content-center">
            <div className="six wide column">
              <div fallbackElement="[object Object]" className="ui search">
                <div className="ui icon input">

                  <input
                    type="text" 
                    defaultvalue="Buscar" 
                    tabindex="0" className="prompt"
                    autocomplete="off" 
                    onChange={(e) => {
                      this.props.onSearch(e.target.value)}}

                    value={this.props.searchedValue} 
                    />

                 {/*<i  aria-hidden="true" className="search icon"></i>*/}
                 <Link to="/page2"><button onClick={() => this.showResult(this.props.searchedArray)} className="ml-2 ui button">Buscar</button></Link>
              
                </div>
                <div className="results transition">
                  <div className="message empty"><div className="header">No results found.</div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
)}};


const mapStateToProps = (state) => {
  return{
      searchedValue:state.doc.searchedValue,
      searchedArray:state.doc.searchedArray
  };
}

const mapDispatchToProps = dispatch => {
  return{
      onSearch: (info) => dispatch(actionCreators.search(info))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchButton);



