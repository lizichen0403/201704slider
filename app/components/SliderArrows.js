import React,{Component} from 'react';
import './SliderArrows.less';
export default class SliderArrows extends Component{
    render(){
        return (
            <div className="slider-arrows">
                <span className="arrow arrow-left">&lt;</span>
                <span className="arrow arrow-right">&gt;</span>
            </div>
        )
    }
}