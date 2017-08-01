import React,{Component} from 'react';
import utils from '../utils';
export default class UserDetail extends Component{
    constructor(){
        super();
        this.state={user:{}};
    }
    componentWillMount(){
        let id=this.props.match.params.id;
        let users=utils.readUser();
        let user=users.find(item=>item.id==id);
        this.setState({user});
    }
    handleClick=()=>{
        utils.delUser(this.state.user.id);
        this.props.history.push("/user/list");
    }
    render(){
        // console.log(this.props.match);
        return (
            <div className="panel panel-default">
                <div className="panel-heading">
                    <button className="btn btn-primary" onClick={()=>this.props.history.goBack()}>返回</button>
                </div>
                <div className="panel-body">
                    ID: {this.state.user.id}<br/>
                    用户名: {this.state.user.username}<br/>
                    邮箱: {this.state.user.email}<br/>
                </div>
                <div className="panel-footer">
                    <button className="btn btn-danger" onClick={this.handleClick}>删除</button>
                </div>
            </div>
        )
    }
}