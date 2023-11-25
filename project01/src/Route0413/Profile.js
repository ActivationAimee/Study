import React from "react"

const data={
    dualblade:{
        name:"듀얼블레이드",
        description:"도적,단검/블레이드"
    },
    hoyoung:{
        name:"호영",
        description:"도적,거선"
    },
    adel:{
        name:"아델",
        description:"전사,튜너"
    }
}
const Profile=({match})=>{
    const {username}= match.params;
    const profile = data[username];
    if(!profile){
        return (
            <div>이 직업은 존재하지 않는 직업입니다.</div>
        )
    }
    return(
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    )
}

export default Profile;