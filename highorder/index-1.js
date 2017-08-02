import React from'react';
import ReactDOM from 'react-dom';
let toPanel=(oldComponent)=>{
    class Panel extends React.Component{
        render(){
            return (
                <div style={{border:'1px solid red'}}>
                    <oldComponent/>
                </div>
            )
        }
    }
    return Panel;
};
let hello=()=><h1>hello</h1>
let panel=toPanel(hello);
ReactDOM.render(<panel/>,document.querySelector('#root'));