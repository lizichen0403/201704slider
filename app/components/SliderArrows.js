import React,{Component} from 'react';
import './SliderArrows.less';
export default class SliderArrows extends Component{
    render(){
        return (
            <div className="slider-arrows">
                <span className="arrow arrow-left" onClick={()=>this.props.turn(-1)}>&lt;</span>
                <span className="arrow arrow-right" onClick={()=>this.props.turn(1)}>&gt;</span>
            </div>
        )
    }
}