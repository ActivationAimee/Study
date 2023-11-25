import React, { useState } from "react"

const Sample =()=>{
    const [seasons,setSeasons]=useState([
        {id:1, season:"아"},
        {id:2, season:"이"},
        {id:3, season:"우"},
        {id:4, season:"에"},

    ]);
    const[input,setInput]=useState("");
    const[nextId, setNextId] = useState(5);

    const seasonList=seasons.map((obj)=><li key={obj.id}>{obj.season}</li>);


    const handleClick=()=>{
        const nextobj = seasons.concat({
            id: nextId,
            season:input,
        })
        setSeasons(nextobj);
        setNextId(nextId+1);
        setInput("");
    }
    return(
    <div>
        <input onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={handleClick}>追加</button>
        <ul>
            {seasonList}
        </ul>
    </div>
    )
}
export default Sample;