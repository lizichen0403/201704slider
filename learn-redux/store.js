import {createStore} from 'redux';
import * as actionTypes from './action-types';
let reducer=(state={number:0},action={})=>{
    switch (action.type){
        case actionTypes.ADD:
            return {number:state.number+1};
        case actionTypes.SUB:
            return {number:state.number-1};
        default:
            return state;
    }
}
let store=createStore(reducer);
export default store;