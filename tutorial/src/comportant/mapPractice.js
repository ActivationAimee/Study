import React, {useState} from "react"

const MapPractice=()=>{

    const [elements,setElements] = useState([
    {id:1, text:"雪だるま"},
    {id:2, text:"氷"},
    {id:3, text:"水"},
    {id:4, text:"風"},

    ]);
    
    const[inputText, setInputText] = useState("");
    const[nextId, setNextId] = useState(5);
    //始まってのものが６、

    const onChange =(e) =>setInputText(e.target.value)
    const onClick=()=>{
        const nextElement = elements.concat({
            id:nextId,
            text:inputText,
        });
        //お勧めしない
        //elements.push(nextElement);

        setElements(nextElement);
        setNextId(nextId+1);
        setInputText("");
    };
 
        const onRemove =(id) =>{
            const nextElement = elements.filter((element) => element.id !== id);
            setElements(nextElement);
        };

    return (
    <div>
        <input value={inputText}onChange={onChange}/>
        <button onClick={onClick}>ADD</button>
        <ul>
        {elements.map((element) =>(
            <li key={element.id} onDoubleClick={()=>onRemove(element.id)}> 
            {element.text}</li>
        ))}
        </ul>
        </div>
        );
};

export default MapPractice;