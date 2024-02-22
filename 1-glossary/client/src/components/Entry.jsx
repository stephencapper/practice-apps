import React from "react";
import { useState } from "react";
import UpdateEntry from "./UpdateEntry.jsx"


const Entry = ({ entry, setEditEntry, setDeleteEntry }) => {
  const [update, setUpdate] = useState({});
  const [showUpdate, setShowUpdate] = useState(false);
  const handleEditOrDelete = () => {
    setUpdate(entry);
    setShowUpdate(!showUpdate);
  }
  let display = (
    <div className="entry">
      <p className="word">Word: {entry.word}</p>
      <p className="desc">Description: {entry.description}</p>
      <button onClick={handleEditOrDelete}>Edit or delete</button>
    </div>
  );
  let updateDisplay = (
    <UpdateEntry
      setUpdate={setUpdate}
      update={update}
      setEditEntry={setEditEntry}
      setDeleteEntry={setDeleteEntry}
      setShowUpdate={setShowUpdate}
      showUpdate={showUpdate}
    />
  )
  return (
    <>{showUpdate ? updateDisplay : display}</>
  );
};

export default Entry;