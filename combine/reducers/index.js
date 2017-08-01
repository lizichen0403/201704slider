import counter from './counter';
import todos from './todos';
import {combineReducers} from 'redux';
//把两个reducer合并成一个
let reducer=combineReducers({
    counter,
    todos
});
export default reducer;