import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import {connect} from 'react-redux';
import * as actionCreators from '../../store/actions/actions';

 class DoctorSchedule extends React.Component{

    render(){
        return(
            <div className="mt-3">
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li className="page-item"><a className="page-link " href="" >Antes</a></li>
                        
                        {this.props.days.map((item) => {
        
                            return (
                                <div className="column w-5">
                                    <li className="page-item"><a className="page-link" >{item.day}</a></li>
                                    {item.hours.map((hr) => {
                                    return <Link to="/page3"><li className="page-item"><button  className=" w-100 page-link" >{hr}</button></li></Link>
                                    })}
                                    
                                </div>
                            )
                        })}
            
                        <li className="page-item">
                            <a className="page-link" href="" >
                                Despues
                            </a>
                        </li>
                    </ul>
                </nav>
                
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        days:state.doc.daysDocX
    };
}

export default connect(mapStateToProps) (DoctorSchedule);

