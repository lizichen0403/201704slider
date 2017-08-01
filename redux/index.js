/**
 * redux是为了解决全局共享的问题
 * 解决全局共享和变量保护之间的矛盾
 */
//dispatch分发的意思 action就是命令对象
//规定任何人想改state,不能直接改，必须间接着通过调用dispatch来修改
//action是一个普通对象，有一个type属性
const CHANGE_TITLE_COLOR = 'CHANGE_TITLE_COLOR';
const CHANGE_TITLE_TEXT = 'CHANGE_TITLE_TEXT';
function createStore(){
    let state = {//定义一个全局状态
        defaultColor: 'orange',
        title: {color: 'red', text: '标题'},
        content: {color: 'green', text: '内容'}
    };
    //获取当前状态
    let getState = ()=> JSON.parse(JSON.stringify(state));
    let dispatch = (action) => { //
        switch (action.type) {
            case CHANGE_TITLE_COLOR://如果有人想改标题的颜色，可以发射这个命令  action={type:'CHANGE_TITLE_COLOR',color:'black'}
                state.title.color = action.color;
                break;
            /*  case CHANGE_TITLE_TEXT://如果有人想改标题的颜色，可以发射这个命令  action={type:'CHANGE_TITLE_COLOR',color:'black'}
             state.title.text = action.text;
             break;*/
            default:
                break;
        }
        ary.forEach(item=>item());
    }
    let ary=[];
    let sub=listener=>ary.push(listener);
    return {
        getState,dispatch,sub
    }
}
let {getState,dispatch,sub} = createStore();
sub(render);
render();
setTimeout(function () {
    dispatch({type: CHANGE_TITLE_COLOR, color: 'black'});
}, 3000)
setTimeout(function () {
    // getState().title.text= 'hello';
    //dispatch({type: CHANGE_TITLE_TEXT, text: '新的标题'});
}, 6000)
function render() {
    renderTitle();
    renderContent();
}
function renderTitle(title) {
    let divTitle = document.getElementById('title');
    divTitle.style.color = getState().title.color?getState().title.color:getState().defaultColor;
    divTitle.innerHTML = getState().title.text;
}
function renderContent() {
    let divContent = document.getElementById('content');
    divContent.style.color = getState().content.color;
    divContent.innerHTML = getState().content.text;
}
