import React,{Component} from 'react';
import './slider.less';
import SliderItems from "./sliderItems";
export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0};
    }
    //移动index
    turn=(step)=>{
        let index=this.state.index+step;
        if(index>=this.props.images.length){
            index=0;
        }
        this.setState({index})
    }
    //开始自动轮播,鼠标经过时暂停自动轮播,移走后开启轮播
    go=()=>{
        this.timer=setInterval(()=>{
            this.turn(1);
        },2000);//每隔两秒钟让index＋1
    }
    componentDidMount(){
        this.go();
    }
    render(){
        return (
            <div className="slider-wrapper"
                 onMouseOver={()=>clearInterval(this.timer)}
                 onMouseOut={this.go}>
                <SliderItems
                    images={this.props.images}
                    index={this.state.index}
                />
            </div>
        )
    }
}
