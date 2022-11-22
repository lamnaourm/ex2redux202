import React from 'react';
import * as Actions from './Actionstype'


const initialState = {
    solde:120
}
const SoldeReducer = (state=initialState, action) => {

    switch(action.type){
        case Actions.AUGUMENTER: return {...state, solde:state.solde+ parseFloat(action.payload)}
        case Actions.DIMINUER: return {...state, solde:state.solde- parseFloat(action.payload)}
        case Actions.INIT: return {...state, solde:parseFloat(action.payload)}
    }
    return state;
}

export default SoldeReducer;
