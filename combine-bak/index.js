import React from 'react';
import ReactDOM from 'react-dom';
import Counter from "./components/Counter";
import Todos from "./components/Todos";
ReactDOM.render(<div>
    <Counter/>
    <Todos/>
</div>,document.querySelector('#root'));