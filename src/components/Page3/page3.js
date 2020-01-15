import React from 'react';
import ToolBar from '../ToolBar/toolBar';
import Footer from '../Footer/footer';
import DateForm from '../DateForm/dateForm';
import DateDetails from '../DateDetails/dateDetails';
import './page3.css';
//import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';


class Page3 extends React.Component{

    componentDidMount() {
        window.scrollTo(0, 0)
      }
      
    render(){
        return(
            
            <div className="backgroundPage3 bg-light" id="top" >
                
            <ToolBar/>
        
            <div className= "container">
                <div className="row justify-content-around">
                    <div className="column col-md-7">
                        <DateForm info={this.props.selectedDoctor} day={this.props.selectedDay} hour={this.props.selectedHour}/>
                    </div>
                    <div className="column col-md-4">
                        <DateDetails info={this.props.selectedDoctor} day={this.props.selectedDay} hour={this.props.selectedHour}/>
                    </div>
                </div>
            </div>

            <Footer/>
                
            </div>  
           
        )};
};

const mapStateToProps = (state ) => {
    return{
        selectedDoctor: state.doc.selectedDoctor,
        selectedHour:state.doc.selectedHour,
        selectedDay:state.doc.selectedDay
    } 
};

export default connect(mapStateToProps) (Page3);





