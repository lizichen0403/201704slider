import React,{Component} from 'react';
import './SliderDots.less'
export default class SliderDots extends Component{
    render(){
        return (
            <div className="slider-dots">
                {
                    this.props.images.map((image,index)=>(
                        <span key={index} className={"dot "+(index==this.props.index||(this.props.index==this.props.images.length&&index==0)?'active':'')} onClick={()=>this.props.turn(index-this.props.index)}></span>
                    ))
                }
            </div>
        )
    }
}