import React from 'react';
import {bindActionCreators} from 'redux';
import actions from '../actions';
//connect用来连接组件和store
import {connect} from 'react-redux';
//UI组件 木偶组件 傻瓜组件
//容器组件  智能组件  聪明组件
class Counter extends React.Component{
    render(){
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.sub}>-</button>
            </div>
        )
    }
}
//把仓库中的状态对象映射为组件的属性对象
let mapStateToProps=state=>({
    number:state.counter.number
});//这个对象会成为当前组件的一个属性对象
//把dispatch方法映射为属性对象
// let mapDispatchToProps=dispatch=>({
//     add:()=>dispatch({type:types.ADD}),
//     sub:()=>dispatch({type:types.SUB})
// });
let mapDispatchToProps=dispatch=>bindActionCreators(actions,dispatch);
export default connect(
    mapStateToProps,mapDispatchToProps
)(Counter);