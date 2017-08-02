import React,{Component} from 'react';
import Title from './Title'
import Content from "./Content";
import PropTypes from 'prop-types'
//在顶层组件中定义上下文对象
export default class App extends Component{
    constructor(){
        super();
        this.state={color:'red'};
    }
    //改变颜色
    switchColor=(color)=>{
        this.setState({color});
    }
    //定义一个类的静态属性
    static childContextTypes={
        color:PropTypes.string,
        switchColor:PropTypes.func
    }
    //返回子组件的上下文对象
    getChildContext(){
        return {color:this.state.color,switchColor:this.switchColor}
    }
    render(){
        return (
            <div style={{color:this.state.color}}>
                App
                <Title/>
                <Content/>
            </div>
        )
    }
}