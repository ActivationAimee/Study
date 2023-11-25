  import React,{useCallback,useRef,useState} from "react"
import {Route, Link} from 'react-router-dom'
import Home from "./component/Home";
import Information from "./component/Information";
import Profile from "./component/Profile";


  const App =()=>{
  return(
    <div>
      <ul>
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/info">INFORMATION</Link></li>
        <li><Link to="/profile/noh">の</Link></li>
        <li><Link to="/profile/toki">はれ</Link></li>
        <li><Link to="/profile/kito">人</Link></li>

      </ul>
      <hr />
      <Route path="/" component={Home} exact/>
      <Route path={["/info","/about"]} component={Information}/>
      {/*<Route path="/about" component={Information}/>*/}
      <Route path="/profile/:username" component={Profile}/>
    </div>
  )

  };

export default App;