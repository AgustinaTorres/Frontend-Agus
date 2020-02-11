import {authHeader} from '../helpers/token';
import Axios from "axios";

export const FETCH_DATA='FETCH_DATA';
export const FETCH_DATA2='FETCH_DATA2';
export const SAVE_DATA='SAVE_DATA';
export const SAVE_SELECTEDDOCTOR='SAVE_SELECTEDDOCTOR';
export const SAVE_DATACUSTOMER='SAVE_DATACUSTOMER';
export const GENERATE_KEY='GENERATE_KEY';

export const saveData =(results) => {
    return {
        type:SAVE_DATA,
        data:results,
    };
}

export const fetchData2 =(data, info) => {
    return (dispatch) => {
        let results = []
        let filter = []
        console.log("holaaaaaaaaaaaaaaaaa", info)

        const data2 = data.map((item) => {
            let slots, itemWithSlot = {...item, calendar: []} 
            Axios.request({
                url: `http://ec2-54-83-180-156.compute-1.amazonaws.com:8890/api/v1/providers/ ${item.provider_id} /availables/slots`,
                method: "GET",
                params: {},
                headers: {Authorization: authHeader()}
            })
            .then(res => {
                slots = res.data.data.slots;
                itemWithSlot.calendar=slots;
                            
            }).catch(err => console.log("BBBBBBBBBBBBBBBBb", err));

            return itemWithSlot;
        })

        console.log("dataaaaaaaaaaaa", data2)
        console.log("infoooooooooo", info)

        filter = data2.filter((item) => item.first_name === info)

        filter.length > 0 ? results = filter : results = data2

         dispatch (saveData(results))
    }}

export const fetchData =(info) => {
    return (dispatch) => {

        const requestOptions = {
            method: 'GET',
            headers: authHeader()
        };

        fetch('http://ec2-54-83-180-156.compute-1.amazonaws.com:8890/api/v1/providers', requestOptions)
        .then(res => res.json())
        .then(res => {
            if(res.error) {
                throw(res.error);
            }
            dispatch (fetchData2(res.data, info));
        })
    }}

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







