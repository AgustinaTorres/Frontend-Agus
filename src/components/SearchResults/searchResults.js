import React from 'react';
import DoctorCard from '../DoctorCard/doctorCard';
import {connect} from 'react-redux';

 class SearchResults extends React.Component{

    render(){
       return(
           
           <div className="container mb-3">
               <div className="column justify-content-around ">

               {this.props.doctors.map((item) => {
                    return(
                                <div className=" container mt-1">
                                        <DoctorCard doctor={item} />
                                </div>
                            )})  }
                </div>
           </div>
       )}
}

const mapStateToProps = (state) => {
    return{
        doctors:state.doc.doctors,
    };
}
export default connect(mapStateToProps)(SearchResults);
    




