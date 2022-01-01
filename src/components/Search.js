import React, { useState } from "react";

const Search = ({ setValue }) => {
  const [keyword, setKeyword] = useState("");

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  console.log(keyword);

  function handleSubmit(event) {
    setValue(keyword);
    setKeyword("");
    event.preventDefault();
  }

  return (
    <div className="searchBox">
      <input type="text" value={keyword} onChange={handleChange} />
      <button className="breweryButton" onClick={handleSubmit}>Search Breweries</button>
    </div>
  );
};

export default Search;
