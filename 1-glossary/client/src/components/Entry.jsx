import React from "react";


const Entry = ({ entry }) => {

  return (
    <div className="entry">
      <div className="word">Word: {entry.word}</div>
      <div className="desc">Description: {entry.description}</div>
    </div>
  );
};

export default Entry;