import { useCallback, useState } from "react";
import Categories from "./component/Categories";
import NewsList from "./component/NewsItem";

const App = () => {
  const [category, setCategory] = useState("all");
  const [searchKeyword, setSearchKeyword] = useState("");
  const onSelect = useCallback((category) => setCategory(category), []);
  const onChange = useCallback((text) => setSearchKeyword(text), []);
  return (
    <div>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </div>
  );
};

export default App;
