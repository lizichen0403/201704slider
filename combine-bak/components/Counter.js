import React from 'react';
import store from '../store';
import * as types from '../action-types';
export default class Counter extends React.Component{
    constructor(){
        super();
        this.state={number:store.getState().counter.number};
    }
    componentDidMount(){
        this.unsubscribe=store.subscribe(()=>{
            this.setState({number:store.getState().counter.number});
        })
    }
    //在组件卸载之前调用一下取消订阅函数
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={()=>store.dispatch({type:types.ADD})}>+</button>
                <button onClick={()=>store.dispatch({type:types.SUB})}>-</button>
            </div>
        )
    }
}