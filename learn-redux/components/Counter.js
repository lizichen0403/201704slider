import React,{Component} from 'react';
import store from '../store';
import * as actionTypes from '../action-types';
export default class Counter extends Component{
    constructor(){
        super();
        this.state={}
    }
    componentDidMount(){
        this.unsubscribe=store.subscribe(()=>{
            this.setState();
        })
    }
    //在组件卸载之前调用一下取消订阅函数
    componentWillUnmount(){
        this.unsubscribe();
    }
    render(){
        return (
            <div>
                <p>{store.getState().number}</p>
                <button onClick={()=>store.dispatch({type:actionTypes.ADD})}>+</button>
                <button onClick={()=>store.dispatch({type:actionTypes.SUB})}>-</button>
            </div>
        )
    }
}