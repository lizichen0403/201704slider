import React,{Component} from 'react';
import PropTypes from 'prop-types'
//如果父组件里定义了上下文对象,那么子组件可以通过this.context属性拿到上下文对象
export default class Title extends Component{
    //规定接收父组件上下文对象
    static contextTypes={
        color:PropTypes.string
    }
    render(){
        return (
            <div style={{color:this.context.color}}>Title</div>
        )
    }
}