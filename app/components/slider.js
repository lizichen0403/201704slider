import React,{Component} from 'react';
import './slider.less';
import SliderItems from "./sliderItems";
import SliderArrows from "./SliderArrows";
export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0};
    }
    //移动index
    turn=(step)=>{
        let index=this.state.index+step;
        if(index>this.props.images.length){
            this.sliders.style.transitionDuration='0s';
            this.sliders.style.left=0;
            getComputedStyle(this.sliders,null).left;
            index=1;
            this.sliders.style.transitionDuration=this.props.speed+'s';
            this.setState({index});
            return;
        }else if(index<0){
            this.sliders.style.transitionDuration='0s';
            this.sliders.style.left=(this.props.images.length)*-300+'px';
            getComputedStyle(this.sliders,null).left;
            index=this.props.images.length-1;
            this.sliders.style.transitionDuration=this.props.speed+'s';
            this.setState({index});
            return;
        }
        this.setState({index});
    }
    //开始自动轮播,鼠标经过时暂停自动轮播,移走后开启轮播
    go=()=>{
        this.timer=setInterval(()=>{
            this.turn(-1);
        },this.props.delay*1000);//每隔两秒钟让index＋1
    }
    componentDidMount(){
        if(this.props.autoPlay){
            this.sliders=document.querySelector('.sliders');
            this.go();
        }
    }
    render(){
        return (
            <div className="slider-wrapper"
                 onMouseOver={()=>clearInterval(this.timer)}
                 onMouseOut={this.go}>
                <SliderItems
                    images={this.props.images}
                    index={this.state.index}
                    speed={this.props.speed}
                />
                <SliderArrows/>
            </div>
        )
    }
}