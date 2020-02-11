import React, { Component } from 'react'
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class SearchButton3 extends Component {

    constructor(props) {
        super(props)
        this.state = {
         searchedValue : ""
        }
    }

    onSearch =(value) => {
        this.setState({searchedValue:value})
    }

    render(){
        console.log(this.state.searchedValue)
        return(
            <div class="ui icon input">
                <input 
                type="text" 
                placeholder="Buscar..." 
                onChange={(e) => {
                    this.onSearch(e.target.value)}}
                value={this.state.searchedValue} 
                />
                <Link to="/page2"><button onClick={() => this.props.onSearch(this.state.searchedValue)} className="ml-2 ui button"><i aria-hidden="true" class="search circular inverted link icon"></i></button></Link>
            </div>
        )
        
    }
}

  const mapDispatchToProps = dispatch => {
    return{
        onSearch: (info) => dispatch(actionCreators.fetchData(info))
    };
  };
  
  export default connect(null, mapDispatchToProps)(SearchButton3);
