import React from "react";
import Entry from "./Entry.jsx"


const EntryList = ({ entries }) => {
  const renderEntries = (entries) => {
    let entryElements = [];
    for (let entry of entries) {
      entryElements.push(<Entry entry={entry} key={entry._id}/>);
    }
    return entryElements;
  }
  return (
    <>
      <div>Entry List</div>
      {renderEntries(entries)}
    </>
  );
};

export default EntryList;