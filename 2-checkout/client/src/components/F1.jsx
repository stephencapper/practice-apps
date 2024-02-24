import React from "react";

const F1 = ({ setView, setData, postData }) => {
  let userData = {};
  const handleName = (e) => {
    userData.name = e.target.value;
  };
  const handleEmail = (e) => {userData.email = e.target.value};
  const handlePassword = (e) => {userData.password = e.target.value};
  const handleNext = (e) => {
    e.preventDefault();
    setData(userData);
    postData('users', userData);
    setView('f2');
  }
  return (
    <>
      <h2>Provide account information</h2>
      <form onSubmit={handleNext}>
        <label>
          Name:
          <input name="name" onChange={handleName} placeholder="Mickey Mouse"/>
        </label>
        <label>
          email:
          <input name="email" onChange={handleEmail} placeholder="mickey@mickey.com"/>
        </label>
        <label>
          password:
          <input name="password" onChange={handlePassword} placeholder="p@55w0rd"/>
        </label>
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default F1;