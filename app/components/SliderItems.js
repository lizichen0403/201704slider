import React,{Component} from 'react';
export default class SliderItems extends Component{
    render(){
        let style={//给ul增加自定义样式对象
            width:(this.props.images.length+1)*300+'px',//宽度是300*图片的数量
            left:this.props.index*-300+'px',//根据状态不同,让图片动起来
            transitionDuration:this.props.speed+'s'//渐变的时间是1秒
        }
        return (
            <ul className="sliders" style={style}>
                {
                    this.props.images.map((image,index)=>(
                        <li className="slider" key={index}>
                            <img src={image.src}/>
                        </li>
                    ))
                }
                <li className="slider" key={this.props.images.length}>
                    <img src={this.props.images[0].src}/>
                </li>
            </ul>
        )
    }
}