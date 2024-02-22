import React from "react";
import { render } from "react-dom";
import Axios from "axios";
import { useState, useEffect } from "react";
import EntryList from "./components/EntryList.jsx";
import Search from "./components/Search.jsx";
import AddEntry from "./components/AddEntry.jsx";


const App = () => {
  const [entries, setEntries] = useState([]);
  const [newEntry, setNewEntry] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [editEntry, setEditEntry] = useState({});
  const [deleteEntry, setDeleteEntry] = useState('');

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

  useEffect(()=>{
    if (!newEntry.word || newEntry.word.length === 0) {
      return;
    }
    Axios.post('./entries', newEntry)
    .then(() => {getAllEntries()})
    .catch(() => {
      if (error.response) {
        console.log('Error posting entry: ', error.reponse.status);
      } else if (error.request) {
        console.log('Error posting entry, no response from server: ', error.request);
      } else {
        console.log('Error posting entry, no request sent: ', error.message);
      }
    });
    return;
  }, [newEntry]);

  useEffect(()=>{
    if (!editEntry.word || editEntry.word.length === 0) {
      return;
    }
    Axios.put(`./entries/${editEntry._id}`, editEntry)
    .then(() => {getAllEntries()})
    .catch(() => {
      if (error.response) {
        console.log('Error editing entry: ', error.reponse.status);
      } else if (error.request) {
        console.log('Error editing entry, no response from server: ', error.request);
      } else {
        console.log('Error editting entry, no request sent: ', error.message);
      }
    });
    return;
  }, [editEntry]);

  useEffect(()=>{
    if (deleteEntry.length === 0) {
      return;
    }
    Axios.delete(`./entries/${deleteEntry}`)
    .then(() => {getAllEntries()})
    .catch(() => {
      if (error.response) {
        console.log('Error deleting entry: ', error.reponse.status);
      } else if (error.request) {
        console.log('Error deleting entry, no response from server: ', error.request);
      } else {
        console.log('Error deleting entry, no request sent: ', error.message);
      }
    });
    return;
  }, [deleteEntry]);

  return (
    <div>
      <h1>Glossary App</h1>
      <AddEntry setNewEntry={setNewEntry}/>
      <Search setSearchTerm={setSearchTerm}/>
      <EntryList entries={entries} searchTerm={searchTerm} setEditEntry={setEditEntry} setDeleteEntry={setDeleteEntry}/>
    </div>
  )
};

render(
  <App />,
  document.getElementById("root")
);
