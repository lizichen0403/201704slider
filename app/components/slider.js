import React,{Component} from 'react';
import './slider.less';
export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0};
    }
    componentDidMount(){
        this.timer=setInterval(()=>{
            this.setState({index:this.state.index+1})
        },2000);//每隔两秒钟让index＋1
    }
    render(){
        let style={//给ul增加自定义样式对象
            width:this.props.images.length*300,//宽度是300*图片的数量
            left:this.state.index*-300+'px',//根据状态不同,让图片动起来
            transitionDuration:'1s'//渐变的时间是1秒
        }
        return (
            <div className="slider-wrapper">
                <ul className="sliders" style={style}>
                    {
                        this.props.images.map((image,index)=>(
                            <li className="slider" key={index}>
                                <img src={image.src}/>
                            </li>
                        ))
                    }

                </ul>
            </div>
        )
    }
}
