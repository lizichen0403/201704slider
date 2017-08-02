//只定义Counter组件自己的状态
let initState={number:0}
import * as types from '../action-types';
//默认导出自己的reducer,给定一个默认值
export default function (state=initState,action) {
    switch (action.type){
        case types.ADD:
            return {number:state.number+1};
        case types.SUB:
            return {number:state.number-1};
        default:
            return state;
    }
}