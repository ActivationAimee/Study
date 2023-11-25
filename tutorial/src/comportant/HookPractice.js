import React,{useEffect,useState,useMemo, useCallback} from "react";
import Style from './HookPractice.module.css'

//useState
export const Counter = () =>{
    const[value,setValue]=useState(0);

    return(
    <div>
        <p>現在:<b>{value}</b>
        </p>
        <button onClick={()=>setValue(value-1)}>-1</button>
        <button onClick={()=>setValue(value+1)}>+1</button>

        
    </div>
    );
};

//useEffect
export const UserInfo =()=>{
    const[name,setName]=useState("noh");
    const[nickName,setNickname]=useState("");

    //componentDidMount(マウントされる時必ず)
    //componentDidUpdate(updateする項目に依存name)
    //componentWillUnmount(cleanup関数によって実行)
    //MOUntされる中
    useEffect(()=>{
        console.log("effect");
        console.log(name);//アップデートされました。
     //   setName(e.target.value);
        //초기화 한다면
        
        //cleanup function
        //dependecy
        //리턴이 클린업함수
        return()=>{
        console.log("cleanup");
        console.log(name);//これからアップデートされる
        }
    },[name]);
    //nameが依存する時갑

    const onChangeName =(e)=>{
        setName(e.target.value);
    };

    const onChangeNickname =(e)=>{
        setNickname(e.target.value);
    };

    return(
        <div>
            {/*입력하는곳*/}
           <div>
            <input value={name} 
            onChange={onChangeName}></input>
            <input value={nickName} 
            onChange={onChangeNickname}></input>  

            </div> 
            {/*표시하는곳*/}

            <div>
                <div>
                    名前:{name};
                </div>

                <div>
                    あだ名:{nickName};
                </div>
            </div>
        </div>
    );

}
//외부함수
const getAverage =(numbers) =>{
    console.log("平均値を計算中・・")
    if(numbers.length === 0) return 0;

    const sum = numbers.reduce((a,b)=>a+b);
    return sum/numbers.length;
};

//useReducer
//Redux

//useMemo

export const Averager = () =>{
    const[list, setList]=useState([]);
    const[number,setNumber]=useState("");

    const onChange = useCallback((e) =>{
        //numberを使ってない
        setNumber(e.target.value)
    },[]);

    const onInsert =useCallback(
    (e) =>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    },[list,number]);
   




    //
    const avg = useMemo (()=>getAverage(list),[list]);


    //returnが呼ばれている=レンダリングしてる
    return(
    <div className={Style.Hook}>
        {console.log(list)}
        <input value={number} onChange={onChange}></input>
        <button onClick={onInsert}>touroku</button>
        <ul></ul>
        <br/><br/>
        <div>
            <b>平均:</b>{avg}
        </div>
    </div>
    );
};

