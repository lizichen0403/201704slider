import React,{Component} from 'react';
import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'
import Home from "./Home";
import User from "./User";
import Profile from "./Profile";
export default class App extends Component{
    render(){
        //react元素用来指明此组件是如何渲染的  Router只能有一个子元素
        //exact表示严格匹配,而非默认的只匹配前缀
        //switch匹配到一个路径后就不再匹配后续的路径
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-inverse">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <div className="navbar-brand">用户管理系统</div>
                            </div>
                            <ul className="nav navbar-nav">
                                <li><Link to='/'>首页</Link></li>
                                <li><Link to="/user">用户管理</Link></li>
                                <li><Link to="/profile">个人设置</Link></li>
                            </ul>
                        </div>
                    </nav>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2">
                                <Switch>
                                    <Route exact path="/" component={Home}/>
                                    <Route path="/user" component={User}/>
                                    <Route path="/profile" component={Profile}/>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}