import React from 'react';
import store from '../store';
import * as types from '../action-types';
export default class Todos extends React.Component{
    constructor(){
        super();
        this.state={list:store.getState().todos.list};
    }
    componentDidMount(){
        store.subscribe(()=>{
            this.setState({list:store.getState().todos.list});
        })
    }
    handleKeyDown=(event)=>{
        let keyCode=event.keyCode;
        if(keyCode==13){
            let text=event.target.value;
            store.dispatch({type:types.ADD_TODO,text});
            event.target.value='';
        }
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.state.list.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}