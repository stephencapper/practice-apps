import React from "react";

const F3 = ({ setView, data, setData, postData }) => {
  let cardData = {};
  const handleChange = (e) => {
    cardData[e.target.name] = e.target.value;
  };
  const handleNext = (e) => {
    e.preventDefault();
    setData({...data, ...cardData});
    postData('cards', cardData);
    setView('purchase');
  }
  return (
    <>
      <h2>Provide card information</h2>
      <form onSubmit={handleNext}>
        <div><label>
          Card number:
          <input name="card_num" onChange={handleChange}/>
        </label></div>
        <div><label>
          Expiry date:
          <input name="exp_date" placeholder="YYYY/MM" onChange={handleChange}/>
        </label></div>
        <div><label>
          CVV:
          <input name="CVV" onChange={handleChange}/>
        </label></div>
        <div><label>
          Billing zip code:
          <input name="bill_zip" onChange={handleChange}/>
        </label></div>
        <button type="submit">Next</button>
      </form>
    </>
  );
};

export default F3;