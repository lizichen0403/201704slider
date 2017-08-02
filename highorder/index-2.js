import React from 'react';
import ReactDOM from 'react-dom';
let Post=(props)=>(
    <div>
        <p>{props.content}</p>
        <button onClick={props.refresh}>刷新</button>
    </div>
);
function getData(url) {
    return fetch(url).then((res)=>res.json());
}
//接收url地址作为参数
let loadAndRefresh=(url)=>{
    return function (OldComponent) {
        class NewComponent extends React.Component{
            constructor(){
                super();
                this.state={content:'数据加载中...'}
            };
            componentDidMount(){
                this.refresh();
            };
            refresh=()=>{
                this.setState({content:'数据加载中...'})
                getData(url).then(data=>this.setState({content:data.time}))
            };
            render(){
                return <OldComponent content={this.state.content} refresh={this.refresh}/>
            }
        }
        return NewComponent
    }
};
let NewPost=loadAndRefresh('http://localhost:3000/clock')(Post);
ReactDOM.render(<NewPost/>,document.querySelector('#root'));