import React from 'react';
import DoctorCard from '../DoctorCard/doctorCard';
import {connect} from 'react-redux';
import { Pagination } from 'semantic-ui-react'

 class SearchResults extends React.Component{

    render(){
       return(
           
           <div className="container">
               <div className="column justify-content-around ">

               {this.props.results.length > 0 ? 
                
                this.props.results.map((item) => {
                    return(
                                <div className=" container mt-1">
                                        <DoctorCard doctor={item}/>
                                </div>
                            )})  

                : this.props.doctors.map((item) => {
                    return(
                                <div className=" container mt-1">
                                        <DoctorCard doctor={item}/>
                                </div>
                            )})
                }
                

                <Pagination className="mt-5 row justify-content-start ml-3" defaultActivePage={5} totalPages={10} />
                </div>
    
           </div>
    
       )}
}


const mapStateToProps = (state) => {
    return{
        results:state.doc.searchedArray2,
        doctors:state.doc.doctors
    };
}
export default connect(mapStateToProps)(SearchResults);
    




