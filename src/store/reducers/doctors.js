import * as actionTypes from '../actions/actions';
//import { Redirect } from 'react-router-dom';

const initialState = {
   
    doctors:[],
    doctorstotal:[],
    selectedDoctor:"",
    selectedHour:"",
    selectedDay:"",
    searchedValue: "",
    dataCustomer:{},
    searchedArray:[],
    searchedArray2:[],
    llave:"",
    filters:[
        {
            name:"Servicios y Terapia",
            options:["Psicoterapia","Psicoanalisis","Terapia Familiar"]
        },
        {
            name:"Metodos de Pago",
            options:["Tarjeta","PayPal","Transferencia Bancaria"]
        },
        {
            name:"Aseguradora",
            options:["Aseguradora1","Aseguradora2","Aseguradora3"]
        },
        {
            name:"Fecha",
            options:["Fecha1","Fecha2","Fecha3"]
        },
        {
            name:"Idioma",
            options:["Español","Ingles"]
        },
    ],

    calendar:[{
        day:"Lunes1",
        hours:["08:00", "15:00", "17:00", "21:00"],
    },
    {
        day:"Martes 2",
        hours:["08:00", "15:00", "17:00", "21:00"],
    },
    {
        day:"Miercoles 3",
        hours:["08:00", "15:00", "17:00", "21:00"],
    },
    {
        day:"Jueves 4",
        hours:["08:00", "15:00", "17:00", "21:00"],
    },
    {
        day:"Viernes 5",
        hours:["08:00", "15:00", "17:00", "21:00"],
    }

],
}

const reducer = (state = initialState, action) => {
    switch  (action.type) {

        case actionTypes.SAVE_DATA:
        return {
            ...state,
            doctors:action.data
        //     doctors:action.data.map((item) => {
        //        return {...item,calendar:state.calendar}
        //     })  
        };

        case actionTypes.SEARCH:
        return {
            ...state,
            searchedValue: action.info,

            /*searchedArray: ((state.doctors.map((item) =>{
               return  Object.values(item)
            })).map((item) => {
                return item.join(" , ")
            })).filter((item) => item.includes(action.info))*/
            
            searchedArray: state.doctors.map((item) => {
                return item.includes(action.info)
            })
        };

        case actionTypes.SEARCH2:
        return {
            ...state,
            searchedArray2: action.results}

        case actionTypes.SAVE_SELECTEDDOCTOR:
        return {
            ...state,
            selectedDoctor: action.dataDoctor,  
            selectedHour:action.hour,
            selectedDay:action.day

        };

        case actionTypes.SAVE_DATACUSTOMER:
        return {
            ...state,
            dataCustomer:action.dataCustomer

        };
        
        case actionTypes.GENERATE_KEY:
        return {
            ...state,
            llave:action.llave

        };

        default:
        return state;
    } 
};
export default reducer;



