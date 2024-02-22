import React from "react";
import { useState } from "react";

const AddEntry = ({ setNewEntry }) => {
  const [newWord, setNewWord] = useState('');
  const [desc, setDesc] = useState('');
  const wordHandler = (e) => {
    setNewWord(e.target.value);
  };
  const descHandler = (e) => {
    setDesc(e.target.value);
  };
  const addEntryHandler = () => {
    setNewEntry({word: newWord, description: desc})
  };
  return (
    <>
      <h3>Add new entry</h3>
      <input placeholder="New word" onChange={wordHandler}/>
      <input placeholder="Description for word" onChange={descHandler}/>
      <button onClick={addEntryHandler}>Add Entry</button>
    </>
  );
};

export default AddEntry;