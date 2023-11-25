import React from "react"

const data={
    noh:{
        name:"の",
        description:"Reactがうまく"
    },
    toki:{
        name:"はれ",
        description:"やりたい"
    },
    kito:{
        name:"人",
        description:"です"
    }
}

const Profile=({match})=>{
    const {username} = match.params;
    const profile =data[username];
    //有効性チェック
    if(!profile){
        return<div>そのユーザーは存在しません。</div>
    }

    return(
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile