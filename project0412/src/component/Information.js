import React from "react"
import qs from "qs";

const Information =({location})=>{
    console.log(location);

    const query = qs.parse(location.search,{ignoreQueryPrefix:true});
    console.log(query);
    const showDetail = query.detail === "true"




    return(
        <div>
            <h1>INFORMATION</h1>
            <p>情報が見れるページ</p>
            {showDetail && <p>detailの値をtrueに設定しましたね</p>}
        </div>
    );
};

export default Information;