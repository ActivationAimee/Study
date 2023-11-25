import React, { useState } from "react";
import "./Categories.css";
import styled, { css } from "styled-components";

const categories = [
  {
    name: "all",
    text: "전체",
  },
  {
    name: "business",
    text: "비즈니스",
  },
  {
    name: "entertainment",
    text: "엔터테이먼트",
  },
  {
    name: "health",
    text: "건강",
  },
  {
    name: "science",
    text: "과학",
  },
  {
    name: "sport",
    text: "스포츠",
  },
  {
    name: "technology",
    text: "기술",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  margin: 0 auto;
  width: 868px;
  background-color: bisque;
  transition: 0.5s background ease-in;
  @media screen and(max-width:769px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.39rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-left: 0.1%;
  padding-bottom: 0.25rem;
  &:hover {
    color: #495057;
  }
  & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.active &&
    css`
      font-wieght: 900;
      border-bottom: 2px solid #22b8cf;
      color:#22b8cf &:hover {
        color: #3bc9db;
      }
    `}
`;

const Categories = ({ onSelect, category }) => {
  // const [newses, setNewses] = useState([]);
  // const [search, setSearch] = useState("");

  // const filteredNews = news.filter((news) => {
  //   return news.name.toLowerCase().inclodes(search.toLowerCase());
  // });
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          onClick={() => onSelect(c.name)}
          active={category === c.name}
        >
          <p>{c.text}</p>
        </Category>
      ))}
      <div className="box1">
        <input
          className="input01"
          type="text"
          placeholder="Search"
          // onChange={(e) => setSearch(e.target.value)}
          // {...Categories}
        ></input>

        <button className="bt01">검색</button>
      </div>
    </CategoriesBlock>
  );
};

export default Categories;
