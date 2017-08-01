import {createStore} from './redux';

let reducer=(state={number:0},action={})=>{
    //判断动作的类型
    switch (action.type){
        case 'ADD':
            return {number:state.number+1};
        case 'SUB':
            return {number:state.number-1};
        default:
            return state;
    }
}
let store=createStore(reducer);
console.log(store.getState());