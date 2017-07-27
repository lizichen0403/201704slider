import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import utils from '../utils';
export default class UserList extends Component{
    constructor(){
        super();
        this.state={users:[]};
    }
    componentDidMount(){//组件加载完成
        let str=utils.readUser();
        this.setState({users:str});
    }
    render(){
        return (
           <table className="table table-bordered">
               <thead>
               <tr>
                   <th>用户名</th>
                   <th>邮箱</th>
               </tr>
               </thead>
               <tbody>
               {
                   this.state.users.map((user,index)=>(
                       <tr key={index}>
                           <td><Link to={"/user/detail/"+user.id}>{user.username}</Link></td>
                           <td>{user.email}</td>
                       </tr>
                   ))
               }
               </tbody>
           </table>
        )
    }
}