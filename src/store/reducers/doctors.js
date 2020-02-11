import * as actionTypes from '../actions/actions';

const initialState = {
   
    doctors:[],
    selectedDoctor:"",
    selectedHour:"",
    selectedDay:"",
    searchedValue: "",
    dataCustomer:{},
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
}

const reducer = (state = initialState, action) => {
    switch  (action.type) {

        case actionTypes.SAVE_DATA:
        return {
            ...state,
            doctors:action.data
        };

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



