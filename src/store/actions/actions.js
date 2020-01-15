import {authHeader} from '../helpers/token';
import Axios from "axios";

export const FETCH_DATA='FETCH_DATA';
export const FETCH_DATA2='FETCH_DATA2';
export const SAVE_DATA='SAVE_DATA';
export const SEARCH='SEARCH';
export const SEARCH2='SEARCH2';
export const SAVE_SELECTEDDOCTOR='SAVE_SELECTEDDOCTOR';
export const SAVE_DATACUSTOMER='SAVE_DATACUSTOMER';
export const GENERATE_KEY='GENERATE_KEY';

export const saveData =(data) => {
    return {
        type:SAVE_DATA,
        data:data
    };
}

export const fetchData2 =(data) => {
    return (dispatch) => {
        const data2 = data.map((item) => {
            let slots;
            let dataWihSlots = [];            

            Axios.request({
                url: 'http://ec2-54-80-4-95.compute-1.amazonaws.com:8890/api/v1/providers/24/availables/slots',
                method: "GET",
                params: {},
                headers: {Authorization: authHeader()}
            })
            .then(res => {
                slots = res.data.data.slots;
                console.log("AAAAAAAAAAAAAAAAAAAAAAAAA", slots);
            
                //item.calendar = slots;
                const itemWithSlot = {...item, calendar: slots};
                console.log("CCCCCCCCCCCCCCCCCCC",itemWithSlot)
                dataWihSlots.push(itemWithSlot);    
                            
            }).catch(err => console.log("BBBBBBBBBBBBBBBBb", err));

            return dataWihSlots;
        })
        console.log("dataaaaaaaaaaaaaaaaaaaaaaaaa",data2)
        dispatch (saveData(data2))
    }}

export const fetchData =() => {
    return (dispatch) => {

        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        fetch('http://ec2-54-80-4-95.compute-1.amazonaws.com:8890/api/v1/providers', requestOptions)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch (fetchData2(res.data));
        })
    }}

export const search =(info) => {
    return {
        type:SEARCH,
        info:info
 };
}

export const searched2 =(results) => {
    return {
        type:SEARCH2,
        results:results
 };
}


export const selectDoctor =(dataDoctor,day,hour) => {
    return {
        type:SAVE_SELECTEDDOCTOR,
        dataDoctor:dataDoctor,
        day:day,
        hour:hour

 };
}

export const saveDataCostumer =(dataCustomer) => {
    return {
        type:SAVE_DATACUSTOMER,
        dataCustomer:dataCustomer,
 };
}

export const generateKey =(llave) => {
    return {
        type:GENERATE_KEY,
        llave:llave,
 };
}




