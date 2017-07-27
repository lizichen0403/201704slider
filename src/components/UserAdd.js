import React,{Component} from 'react';
import utils from '../utils';
export default class UserAdd extends Component{
    handleSubmit=()=>{
        let username=this.refs.username.value;//取得用户名的值
        let email=this.refs.email.value;//取得邮箱的值
        utils.saveUser({username,email});
        //保存成功后,跳转到列表页
        this.props.history.push('/user/list');
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label className="control-label">姓名</label>
                    <input type="text" className="form-control" ref="username"/>
                </div>
                <div className="form-group">
                    <label className="control-label">邮箱</label>
                    <input type="email" className="form-control" ref="email"/>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary"/>
                </div>
            </form>
        )
    }
}