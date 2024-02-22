import React from "react";
import { render } from "react-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import EntryList from "./components/EntryList.jsx";
import Search from "./components/Search.jsx";


const App = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [editEntry, setEditEntry] = useState('');
  const [deletetEntry, setDeleteEntry] = useState('');

  const getAllEntries = () => {
    Axios.get('/entries')
    .then((res) => {
      setEntries(res.data);
    }).catch((error) => {
      if (error.response) {
        console.log('Error getting entries: ', error.reponse.status);
      } else if (error.request) {
        console.log('Error getting entries, no response from server: ', error.request);
      } else {
        console.log('Error getting entries, no request sent: ', error.message);
      }
    });
  };

  useEffect(()=>{
    getAllEntries();
    return;
  }, []);

  return (
    <div>
      <h1>Glossary</h1>
      <Search setSearchTerm={setSearchTerm}/>
      <EntryList entries={entries} searchTerm={searchTerm}/>
    </div>
  )
};

render(
  <App />,
  document.getElementById("root")
);
