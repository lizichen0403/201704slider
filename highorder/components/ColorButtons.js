import React,{Component} from 'react';
import PropTypes from 'prop-types'
export default class ColorButtons extends Component{
    static contextTypes={
        color:PropTypes.string,
        switchColor:PropTypes.func
    }
    render(){
        return (
            <div>
                <button style={{color:'red'}} onClick={()=>this.context.switchColor('red')}>变红</button>
                <button style={{color:'green'}} onClick={()=>this.context.switchColor('green')}>变绿</button>
            </div>
        )
    }
}