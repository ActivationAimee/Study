import React from "react";

//関数コンポーネント
export function MyComponent(){
    return<div>私の初めてのコンポーネント:普通の関数</div>;
}
//アロー関数
export const MyComponent1 =(props)=>{
    const serifu="私の初めてのコンポーネント:名前は"
    return<div>{props.children}{serifu}{props.name}年は{props.age}です。</div>;

}

//クラス
export class MyComponent2 extends React.Component{
    render(){
        return<div>私の初めてのコンポーネント:クラス</div>;

    }
}

