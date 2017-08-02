import React from 'react';
import store from './store'
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
//这个react-redux可以帮助我们自动连接
import {Provider} from './react-redux';
//Provider是提供者,接收一个我们提供的store属性,然后又传递给了它的所有的子组件
ReactDOM.render(
    <Provider store={store}>
        <div>
            <Counter/>
            <Todos/>
        </div>
</Provider>,document.querySelector('#root'));