import React from "react"
import {Route, Link} from 'react-router-dom'
import Home from "./Route0413/Home";
import Information from "./Route0413/Information";
import Profile from "./Route0413/Profile";

 const Routetest=()=>{
    return(
        <div>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/info">HOME</Link></li>
                <li><Link to="/profile/dualblade">DUALBLADE</Link></li>
                <li><Link to="/profile/hoyoung">HOYOUNG</Link></li>
                <li><Link to="/profile/adel">ADEL</Link></li>
            </ul>
            <hr />
            <Route path="/" component={Home} exact/>
            <Route path={["/info","/about"]} component={Information}/>
            <Route path="/profile/:username" component={Profile}/>
        </div>
    );
 };
 export default Routetest;