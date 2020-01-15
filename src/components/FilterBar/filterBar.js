import React from 'react';
//import Aux from '../../hoc/withAux/withAux';
import './filterBar.css';
import FilterButton from '../FilterButton/filterButton';
import {connect} from 'react-redux';



class FilterBar extends React.Component{

    render(){
        return(
            <div className = "container mt-5">
                <div className="row justify-content-center">
                {this.props.filters.map((item) => {
                    return <FilterButton filter={item}/>
                })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        filters:state.doc.filters
    };
}

export default connect(mapStateToProps) (FilterBar);


