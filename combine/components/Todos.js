import React from 'react';
import {bindActionCreators} from 'redux';
import * as  types from '../action-types';
import actions from '../actions';
import {connect} from 'react-redux';
class Todos extends React.Component{
    handleKeyDown=(event)=>{
        let keyCode=event.keyCode;
        if(keyCode==13){
            let text=event.target.value;
            this.props.addTodo(text);
            event.target.value='';
        }
    }
    render(){
        return (
            <div>
                <input type="text" onKeyDown={this.handleKeyDown}/>
                <ul>
                    {
                        this.props.list.map((item,index)=>(
                            <li key={index}>{item}<button onClick={()=>this.props.deleteTodo(index)}>-</button></li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}
let mapStateToProps=state=>({
    list:state.todos.list
});
let mapDispatchToProps=dispatch=>({
    addTodo:(text)=>dispatch({type:types.ADD_TODO,text}),
    deleteTodo:(index)=>dispatch({type:types.DELETE_TODO,index})
});
// let mapDispatchToProps=dispatch=>bindActionCreators(actions,dispatch);
export default connect(
    mapStateToProps,mapDispatchToProps
)(Todos);