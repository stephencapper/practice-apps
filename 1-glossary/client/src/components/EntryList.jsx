import React from "react";
import Entry from "./Entry.jsx"


const EntryList = ({ entries, searchTerm, setEditEntry, setDeleteEntry }) => {
  const renderEntries = (entries) => {
    let entryElements = [];
    for (let entry of entries) {
      if ((entry.word.toLowerCase()).indexOf(searchTerm.toLowerCase()) !== -1) {
        entryElements.push(<Entry entry={entry} setEditEntry={setEditEntry} setDeleteEntry={setDeleteEntry} key={entry._id}/>);
      }
    }
    return entryElements;
  }
  return (
    <>
      <h2>Glossary Entries</h2>
      {renderEntries(entries)}
    </>
  );
};

export default EntryList;