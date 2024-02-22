import React from "react";
import { useState } from "react";

const Search = ({ setSearchTerm }) => {
  //some code
  const [term, setTerm] = useState('');
  const handleTerm = (e) => {
    setTerm(e.target.value);
  };
  const handleSearchSubmit = () => {
    setSearchTerm(setTerm);
  };

  return (
    <>
      <input name="searchTerm" placeholder="Word" onChange={handleTerm}/>
      <button name="searchSumbit" onClick={handleSearchSubmit}>Search</button>
    </>
  );
};

export default Search;