import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Redux - importar metodos de redux
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';

//Redux - middleWare para acciones asincronicas
import thunk from 'redux-thunk';

//Redux - importar reducers
import doctorReducer from './store/reducers/doctors';

//Redux - definir Reducer global
const rootReducer = combineReducers({
    doc:doctorReducer
})

//dev.tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//Redux - crar Store .- conectar Reducer Global con store.- conectar MiddleWare con store.
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

//Redux - Conectar APP (COMPONENTES) con la store - Provider
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
