import React, {useState} from "react";

const MapPrac=()=>{
    const [elements,setElements] = useState([
        {id:1, text:"aa"},
        {id:2, text:"bb"},
        {id:1, text:"cc"},
        {id:1, text:"dd"},
    ]);
    
    const[inputText, setInputText] = useState("");
    const[nextId, setNextId] = useState(5);

    const onChange = (e) =>setInputText(e.target.value)
    const onClick=()=>{
        const nextElement = elements.concat({
            id:nextId,
            text:inputText,
        });
        
        setElements(nextElement);
        setNextId(nextId+1);
        setInputText("");
    };

    const onRemove = (id) =>{
        const nextElement = elements.filter((element)=> element.id !== id);
        setElements(nextElement);
    };
    return(
        <div>
            <input value={inputText}onChange={onChange}/>
            <button onClick={onClick}>ADD</button>
            <ul>
               {elements.map((element)=>(
                   <li
                   key={element.id} onDoubleClick={()=>onRemove(element.id)}>
                    {element.text}   
                   </li>
               ))} 
            </ul>
        </div>
    );

}

export default MapPrac;