//这是一个方法,用于创建一个仓库
//reducer每个项目都不一样,要作为参数传进来
let createStore=(reducer)=>{
    let state;//初始状态4
    let getState=()=>state;
    let listeners=[];
    //提供给外界调用,用来派发action的
    let dispatch=(action)=>{
        state=reducer(state,action);
        listeners.forEach(l=>l());
    }
    //订阅状态变化事件监听
    let subscribe=listener=>{
        listeners.push(listener);
        dispatch();
    }
    return {
        dispatch,
        subscribe,
        getState
    }
}
export {createStore}