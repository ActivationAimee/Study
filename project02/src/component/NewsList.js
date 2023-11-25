import React, { useEffect, useState } from "react";
import Style from "./NewsList.module.scss";
import axios from "axios";

const NewsItem=({article})=>{
//분할대입
    const {title,description,url,urlToImage,author}=article;
    return(
        <div className={Style.NewsItem}>
            <div>{urlToImage&&(<div className={Style.thumbnail}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={urlToImage} alt="alt"/>
                </a>
                </div>
                )}
                {/*image*/}
            </div>
            <div>
                <div className={Style.content}>
                {/*content*/}
                <h1>
                <a href={url} target="_blank" rel="noopener noreferrer">
                {title}</a>
                </h1>
                <p>{description}</p>
                <h4>{author}</h4>
                </div>
            </div>
        </div>
    );
};

//const sample= {
 //   title: "title",
 //   description: "닌텐도 스위치로 출시될 예정인 인디게임들을 소개하는 ‘닌텐도 인디 월드’ 쇼케이스가 진행된 가운데. 이들 발표에 2021년 초 국산 인디게임 최고 인기작 중 하나로 떠오르고 있는 게임이 등장했다. 사우스포게임즈가 개발하고 네오위즈가 퍼블리싱하는 ‘스컬’이 그 주인공이다. 이와 관련해 ‘닌텐도 인디 월드’를 통해 액션 로그라이트 장르 ‘스컬’이 올 여름 출시를 예고했다. 또한, ‘스컬’을 개발한 사우스포게임즈의 박상우 대표가 영상으로 참석, 게임에 대한 소개를 …",
 //   url: "http://www.khgames.co.kr/news/articleView.html?idxno=128195",
  //  urlToImage: "http://www.khgames.co.kr/news/thumbnail/202104/128195_103606_751_v150.jpg",
//};
const NewsList=()=>{
    const[articles,setAticles]=useState(null);
    const[loading,setLoading]=useState(false);

    useEffect(()=>{
        const response=async()=>{
            setLoading(true);
            try{
                const data=await axios.get(
                    "https://newsapi.org/v2/top-headlines?country=kr&apiKey=e0e9dcf7f9ad450d8b60584b0d2a2a3a"
                );
                //response의 data
                console.log(data);
                setAticles(data.data.articles);
            }catch(error){
                console.log(error);
            };
            setLoading(false);
        };
        //함수로 불러들여서 의존성을 부르지 않아도 됨
        response();
    },[]);
    //의존성은 정의해줘야함(形だけ)
    if(loading){
        return<div>Loading...</div>
    }
    //articlesない場合
    if(!articles){
        return null;
    }

    return(
        <div className={Style.NewsList}>
            {articles.map((article)=>(
                //article.url를 키값에 넣으면겹칠경우 없음
                <NewsItem key={article.url} article={article}/>
            ))}
        </div>
    );

};

export default NewsList;