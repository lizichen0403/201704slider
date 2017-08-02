import React,{Component} from 'react';
import PropTypes from 'prop-types'
import ColorButtons from "./ColorButtons";
export default class Content extends Component{
    static contextTypes={
        color:PropTypes.string
    }
    render(){
        return (
            <div style={{color:this.context.color}}>
                Content
                <ColorButtons/>
            </div>
        )
    }
}