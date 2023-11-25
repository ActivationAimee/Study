import React, { useEffect, useState } from "react";
import "./NewsItem.css";
import axios from "axios";
import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  &:nth-child(even){
    background: lightgrey;
  }
  .thumbnail {
    margin-right: 1rem;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }

  .contents {

      h2 {W
        margin: 0;
        
        a {
          color: black;
        }
      }
      p {
        margin: 0;
        line-height: 1.5;
        margin-top: 0.5rem;
        white-space: normal;
      }
    
  }
  & + & {
    margin-top: 3rem;
  }
`;

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 900px;
  margin: 0 auto;
  .onecontent {
    & + & {
      border-top: 1px solid #dee2e6;
    }
    &:nth-child(even) {
      background: whitesmoke;
    }
  }
  @media screen and(max-width:769px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <NewsItemBlock>
      {console.log("RENder")}

      {urlToImage && (
        <div className="thumbnail">
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="thumbnail" />
          </a>
        </div>
      )}

      <div className="contents">
        <a href={url} target="_blank" rel="noopener noreferrer">
          <h2>{title.substring(0, title.indexOf("-"))}</h2>
        </a>
        <p>
          {description !== null &&
            (description.length >= 50
              ? description.substring(0, 50) + "..."
              : description)}
        </p>
      </div>
    </NewsItemBlock>
  );
};

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const responseData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=e0e9dcf7f9ad450d8b60584b0d2a2a3a`
        );
        setArticles(response.data.articles);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    responseData();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>;
  }

  //articlesない場合
  if (!articles) {
    return null;
  }

  const newsArticles = article.filter((article) => {
    return (
      (article.title && article.title.indexOf(searchKeyword) !== -1) ||
      (article.description && article.description.indexOf(searchKeyword) !== -1)
    );
  });

  return (
    <NewsListBlock>
      <div className="onecontent">
        {console.log(articles)}
        {articles.map((article) => {
          return <NewsItem key={article.url} article={article} />;
        })}
      </div>
    </NewsListBlock>
  );
};

export default NewsList;
