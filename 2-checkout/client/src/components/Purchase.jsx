import React from "react";

const Purchase = ({ setView, data, postData }) => {
  const purchaseData={};
  let cart = 'Lots of amazing products';
  const handlePurchase = ()=> {
    purchaseData.purchase = cart;
    postData('purchases', purchaseData);
    setView('homepage');
  }
  return (
    <>
      <h2>Confirm information provided, and click to purchase</h2>
      <h3>Account information</h3>
      <div>Name: {data.name}</div>
      <div>email: {data.email}</div>
      <div>password: {data.passsword}</div>
      <h3>Contact information</h3>
      <div>Address line 1: {data.line_1}</div>
      <div>Address line 2: {data.line_2}</div>
      <div>Address city: {data.city}</div>
      <div>Address state: {data.state}</div>
      <div>Address zip code: {data.zip}</div>
      <div>Phone number: {data.phone}</div>
      <h3>Card information</h3>
      <div>Card number: {data.card_num}</div>
      <div>Expiry date: {data.exp_date}</div>
      <div>CVV: {data.CVV}</div>
      <div>Billing zip code: {data.bill_zip}</div>
      <h3>Shopping cart</h3>
      <div>Your purchases: {cart}</div>
      <button onClick={handlePurchase}>Purchase</button>
    </>
  );
};

export default Purchase;