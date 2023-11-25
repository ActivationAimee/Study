import React, { useState } from "react";
import Counter from "./component/Counter";
import CounterF from "./component/CounterF";
import EventPractice from "./component/EventPractice";
import HookSample from "./component/HookSample";
import { MyComponent, MyComponent1, MyComponent2 } from "./component/MyComponent";
import Sample from "./component/Sample";
import Say from "./component/Say";
import Test from "./component/test";
import Test1 from "./component/test1";
import Test2 from "./component/test2";

const App =()=>{
  const[visible, setVisible]=useState(false);
  return(
    <div>
      <button onClick={()=>{setVisible(!visible)}}>
      {visible ? '隠す':'見せる'}</button>
      <HookSample/>

      <Test2/>
    </div>
  );
};

export default App;