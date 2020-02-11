import React from 'react';
import Carrousel from '../Carrousel/carrousel';
import DoctorData from '../DoctorData/doctorData';


const DoctorCard = (props) => {
    return(
        <div className="ui cards row " >
            <DoctorData doctor={props.doctor}/>
            <Carrousel doctor={props.doctor} />
        </div>
    )
}
export default DoctorCard;



