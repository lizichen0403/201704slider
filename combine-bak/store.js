import {createStore,combineReducers} from 'redux';
//从reducers文件夹中得到index文件
import reducer from './reducers';
let store=createStore(reducer);
window.store=store;
export default store;