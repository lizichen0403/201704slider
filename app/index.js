import React from 'react';
import ReactDOM from 'react-dom';
import Slider from './components/slider';
import './index.less';
const IMAGES=[
    {src:require('./images/1.jpg')},
    {src:require('./images/2.jpg')},
    {src:require('./images/3.jpg')}
]
ReactDOM.render(<Slider
    images={IMAGES}//需要轮播图片的数据
    autoPlay={true}//是否启动自动轮播
    delay={1.5}//每隔多少秒轮播一次
    speed={1}//多少时间可以轮播一次
    arrows={true}//是否显示左右箭头导航
    dots={true}//是否显示点状导航
/>,document.querySelector('#root'));
