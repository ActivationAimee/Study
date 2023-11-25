import React,{useState} from "react";
import "./refPractice.css";

const RefPrac = () =>{
    const[password,setPassword] = useState("");
    const[clicked, setClicked] = useState(false);
    const[validated, setValidated] = useState(false);

    let input = React.createRef();

    const onChange=(e) =>{
        setPassword(e.target.value);
    }

    const validate = () =>{
      setClicked(true);
      setValidated(password === '0000')

      input.focus();  
    };
    return(
        <div>
            <input ref={(ref)=> (input=ref)}
            type="password"
            value={password}
            onChange={onChange} className={clicked? (validated?"success":"failure"):""}
            />
            <button onClick={validate}>kennsyou</button>

        </div>
    );
};

export default RefPrac;