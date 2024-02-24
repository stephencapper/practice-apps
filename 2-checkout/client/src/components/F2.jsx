import React from "react";

const F2 = ({ setView, data, setData, postData }) => {
  let contactData = {};
  const handleChange = (e) => {
    contactData[e.target.name] = e.target.value;
  };
  const handleNext = (e) => {
    e.preventDefault();
    setData({...data, ...contactData});
    postData('contacts', contactData);
    setView('f3');
  }
  return (
    <>
      <h2>Provide contact information</h2>
      <form onSubmit={handleNext}>
        <div><label>
          Address line 1:
          <input name="line_1" onChange={handleChange}/>
        </label></div>
        <div><label>
          Address line 2:
          <input name="line_2" onChange={handleChange}/>
        </label></div>
        <div><label>
          Address city:
          <input name="city" onChange={handleChange}/>
        </label></div>
        <div><label>
          Address state:
          <input name="state" onChange={handleChange}/>
        </label></div>
        <div><label>
          Address zip code:
          <input name="zip" onChange={handleChange}/>
        </label></div>
        <div><label>
          Phone number:
          <input name="phone" onChange={handleChange}/>
        </label></div>
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default F2;