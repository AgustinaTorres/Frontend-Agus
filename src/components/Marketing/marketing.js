import React from 'react';
import './marketing.css';


const Marketing = (props) => {
    return(
        <div className="marketing col-md-2 bg-white column">
            <div class="card mt-3">
                <img class="img-fluid card-img" src="https://static01.nyt.com/images/2019/07/04/fashion/26instatherapy/5d27ef42387547cca223e4d9db09f659-articleLarge.jpg?quality=75&auto=webp&disable=upscale" alt="Card image"/>
            </div>
            <div class="card mt-3">
                <img class="img-fluid card-img" src="http://cetes.com.ar/imagenes/banner_turnos_online.jpg" alt="Card image"/>
            </div>
            <div class="card mt-3 mb-3">
                <img class="img-fluid card-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStXMn43ONiP2tG5QxEuEEqyUzAvqDLz-sbuxE-zg7b-QLzVAX_&s" alt="Card image"/>
            </div>
         </div>
    )
}
export default Marketing;