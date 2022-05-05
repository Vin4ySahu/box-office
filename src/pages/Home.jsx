import React, { useState } from "react";
import MainPagelayout from "../Commponents/MainPagelayout";
import { apiGet } from "../Misc/config";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");
  const isShowSearch = searchOption === "shows";
  const onInputChange = (ev) => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
    });
  };

  const onRadioChange = (ev) => {
    setSearchOption(ev.target.value);
  };
  console.log(searchOption);

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No search Found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show
        ? results.map((item) => <div key={item.show.id}>{item.show.name}</div>)
        : results.map((item) => (
            <div key={item.person.id}>{item.person.name}</div>
          ));
    }
    return null;
  };
  return (
    <MainPagelayout>
      <input
        type="text"
        placeholder="Search For Something"
        onChange={onInputChange}
        value={input}
        onKeyDown={onKeyDown}
      />
      <div>
        <label htmlFor="show-search">
          Show
          <input
            type="radio"
            id="show-search"
            checked={isShowSearch}
            value="shows"
            onChange={onRadioChange}
          />
        </label>
        <label htmlFor="actor-search">
          Actors
          <input
            type="radio"
            id="actor-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          />
        </label>
      </div>
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </MainPagelayout>
  );
};

export default Home;
