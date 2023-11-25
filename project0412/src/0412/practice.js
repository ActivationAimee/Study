import React, { useCallback, useRef, useState } from "react"

const App=()=>{
    const nextId=useRef(1);
    const [form,setForm] = useState({username:"",name:""});
    const [data,setData]=useState({
        array:[],
        uselessValue:null,
        //uselessValueは触らないでねという意味片方だけ入りたいと言ってもそのまま修正したい
    });

    const onChange = useCallback(
      (e)=>{
        const{name,value}=e.target;
        
        setForm({
            //不変性守りたい
            ...form,
            [name]:value,
        });
    },[form]);
    //formは守りたい

    const onSubmit=useCallback(
        (e)=>{
            e.preventDefault();
            const info={
                id:nextId.current,
                name:form.name,
                username:form.username,
            };

        setData({
          ...data,
          array:data.array.concat(info),
        });
        setForm({
            name:"",
            username:"",
        });
        nextId.current+=1;
    },[data,form.name,form.username]
    );
    const onRemove =useCallback(
        (id)=>{
            setData({
                ...data,
                array:data.array.filter(info=>info.id!==id),
            });
    },[data]);

    return(
        <div>
            <form onSubmit  ={onSubmit}>
                <input name="username" placeholder="USERNAME" value={form.username} onChange={onChange}></input>
                <input name="name" placeholder="NAME"value={form.name} onChange={onChange}></input>
                <button type="submit">登録</button>
            </form>
            <div>
                <ul>{data.array.map((info)=>(
                    <li key={info.id} onClick={()=>onRemove(info.id)}>{info.username}({info.name})</li>
                ))}
                </ul>
            </div>
        </div>
    )
}
export default App;