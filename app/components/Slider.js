import React,{Component} from 'react';
import './Slider.less';
import SliderItems from "./SliderItems";
import SliderArrows from "./SliderArrows";
import SliderDots from "./SliderDots";
export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0,isMoving:false};
    }
    //移动index
    turn=(step)=>{
        if(!this.state.isMoving){
            this.setState({isMoving:true});
            let index=this.state.index+step;
            if(index>this.props.images.length){
                this.sliders.style.transitionDuration='0s';
                this.sliders.style.left=0;
                getComputedStyle(this.sliders,null).left;
                index=1;
                this.sliders.style.transitionDuration=this.props.speed+'s';
                this.setState({index});
                setTimeout(()=>{
                    this.setState({isMoving:false})
                },this.props.speed*1000);
                return;
            }else if(index<0){
                this.sliders.style.transitionDuration='0s';
                this.sliders.style.left=(this.props.images.length)*-300+'px';
                getComputedStyle(this.sliders,null).left;
                index=this.props.images.length-1;
                this.sliders.style.transitionDuration=this.props.speed+'s';
                this.setState({index});
                setTimeout(()=>{
                    this.setState({isMoving:false})
                },this.props.speed*1000);
                return;
            }
            this.setState({index});
            setTimeout(()=>{
                this.setState({isMoving:false})
            },this.props.speed*1000);
        }
    }
    //开始自动轮播,鼠标经过时暂停自动轮播,移走后开启轮播
    go=()=>{
        this.timer=setInterval(()=>{
            this.turn(1);
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
                 onMouseOver={()=>{clearInterval(this.timer)}}
                 onMouseOut={this.go}>
                <SliderItems
                    images={this.props.images}
                    speed={this.props.speed}
                    index={this.state.index}
                />
                {this.props.arrows?<SliderArrows turn={this.turn}/>:null}
                {this.props.dots?<SliderDots images={this.props.images} turn={this.turn} index={this.state.index}/>:null}
            </div>
        )
    }
}