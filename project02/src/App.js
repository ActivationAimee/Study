import React, { useState } from "react";
import axios from "axios";
import NewsList from "./component/NewsList";

const App=()=>{
  const [data,setData]=useState(null);
  const onClick=async()=>{
    try{
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=kr&apiKey=e0e9dcf7f9ad450d8b60584b0d2a2a3a");
       setData(response.data);

    }catch(error){
      console.log(error);
    }
  };

  return( 
  <div>
  <NewsList/>
  </div>
  );
};
export default App;
