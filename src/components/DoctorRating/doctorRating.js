import React from 'react';


const DoctorRating = (props) => {


    let doctorScore = Math.round(props.rate)
    var arrayScore = [];

    switch (doctorScore) {
        case (doctorScore =1):
            arrayScore = [1,0,0,0,0] ;
            break;
        case (doctorScore =2):
            arrayScore = [1,1,0,0,0] ;
          break;
        case (doctorScore =3):
            arrayScore = [1,1,1,0,0] ;
            break;
        case (doctorScore =4):
            arrayScore = [1,1,1,1,0] ;
            break;
        default:
            arrayScore = [1,1,1,1,1] ;
            break;
      }
    

    const handlingNewArray = (item) => {
        if (item !== 0 ) {
            item = "active icon"
        } else item =  "icon"
        return item
      };

     const newArray = arrayScore.map((num) => handlingNewArray(num))
    

     return(
        <div className="ui star rating" role="radiogroup" tabindex="-1">
            <i
                tabindex="0"
                aria-checked="false"
                aria-posinset="1"
                aria-setsize="5"
                className= {newArray[0]}
                role="radio"
            ></i>
            <i
                tabindex="0"
                aria-checked="false"
                aria-posinset="2"
                aria-setsize="5"
                className={newArray[1]}
                role="radio"
            ></i>
            <i
                tabindex="0"
                aria-checked="true"
                aria-posinset="3"
                aria-setsize="5"
                className={newArray[2]}
                role="radio"
            ></i>
            <i
                tabindex="0"
                aria-checked="false"
                aria-posinset="4"
                aria-setsize="5"
                className={newArray[3]}
                role="radio"
            ></i>
            <i
                tabindex="0"
                aria-checked="false"
                aria-posinset="5"
                aria-setsize="5"
                className={newArray[4]}
                role="radio"
            ></i>
            
        </div>
    )
}

export default DoctorRating;