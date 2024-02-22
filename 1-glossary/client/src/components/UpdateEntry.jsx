import React from "react";
import { useState } from "react";

const UpdateEntry = ( { update, setUpdate, setEditEntry, setDeleteEntry, setShowUpdate, showUpdate } ) => {
  const [updatedWord, setUpdatedWord] = useState('');
  const [updatedDesc, setUpdatedDesc] = useState('');

  const handleEditWord = (e) => {setUpdatedWord(e.target.value)};
  const handleEditDesc = (e) => {setUpdatedDesc(e.target.value)};
  const handleEdit = () => {
    let updatedEntry = update;
    if(updatedWord.length !==0){
      updatedEntry.word = updatedWord;
    }
    if(updatedDesc.length !==0){
      updatedEntry.description = updatedDesc;
    }
    setEditEntry(updatedEntry);
    setUpdate({});
    setUpdatedWord('');
    setUpdatedDesc('');
    setShowUpdate(!showUpdate);
  };
  const handleDelete = () => {
    setDeleteEntry(update._id);
    setUpdate({});
    setUpdatedWord('');
    setUpdatedDesc('');
    setShowUpdate(!showUpdate);
  };

  let updateForm = null;
  if (update.word) {
    updateForm = (
      <div>
        <div>
          <label htmlFor="editWord">Word: </label>
          <input id="editWord" onChange={handleEditWord} defaultValue={update.word}/>
        </div>
        <div>
          <label htmlFor="editDesc">Description: </label>
          <input id="editDesc" defaultValue={update.description} onChange={handleEditDesc}/>
        </div>
        <button onClick={handleEdit}>Save edits</button>
        <button onClick={handleDelete}>Delete entry</button>
      </div>
    );
  }
  return (
    <>
      {updateForm}
    </>
  );
};

export default UpdateEntry;