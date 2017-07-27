import React,{Component} from 'react';
import {HashRouter as Router,Route,Link} from 'react-router-dom';
function Home() {
    return <div>Home</div>
}
function User() {
    return <div>User</div>
}
export default class App extends Component{
    render(){
        //react元素用来指明此组件是如何渲染的
        return (
            <Router>
                <div>
                    <ul>
                        <li><a href="#/">首页</a></li>
                        <li><a href="#/user">用户管理</a></li>
                    </ul>
                    <hr/>

                    <Route path="/" component={Home}/>
                    <Route path="/user" component={User}/>
                </div>
            </Router>
        )
    }
}