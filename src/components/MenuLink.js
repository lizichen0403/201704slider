import React,{Component} from 'react';
import {Route,Link} from 'react-router-dom';
export default ({to,label,exact})=>(
    //不管路由是否能匹配上,children里的函数组件都能显示
    //路由path和浏览器地址栏的url进行匹配
    <Route exact={exact} path={to} children={
        ({match})=>(
            <li className={match?'active':''}><Link to={to}>{label}</Link></li>
        )
    }/>
)