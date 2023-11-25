import React from "react";
import PropTypes from "prop-types";

//Destructing 분할
//de-structing
//JavaScript ES6.0 Arrow Function화살표 함수

//function method


export const Noh=(props) => {
    //引数(props)
    //const name = props.name;
    //const children = props.children;

const{name,children} = props;
    return(
        <div>
  
        <h1>{name}</h1>
        <h2>{children}</h2>
        </div>
    );
};

//Noh.defaultprops ={
  //  name:"Default Nmae",
//}

Noh.propTypes ={
    name:PropTypes.string.isRequired
}