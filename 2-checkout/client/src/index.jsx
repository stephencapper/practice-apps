import React from "react";
import { render } from "react-dom";
import { useState } from "react";
import axios from "axios";

import F1 from "./components/F1.jsx";
import F2 from "./components/F2.jsx";
import F3 from "./components/F3.jsx";
import Purchase from "./components/Purchase.jsx";


const App = () => {
  const [view, setView] = useState('homepage');
  const [data, setData] = useState({});

  const postData = (endpoint, data) => {
    axios.post(`/checkout/${endpoint}`, data)
    .then(console.log(endpoint, ' post successful'))
    .catch((err)=>(console.log('Error with ', endpoint, ' post request: ', err)))
  };

  const handleCheckout = ()=>{setView('f1')};

  const homepageView = (
    <div>
      <p>Imagine a beautiful shopping experience during which you put lots of amazing products into your cart</p>
      <button type="button" name="checkout" onClick={handleCheckout}>Checkout</button>
    </div>
  );

  const f1View = (
    <F1 setView={setView} setData={setData} postData={postData}/>
  );
  const f2View = (
    <F2 setView={setView} data ={data} setData={setData} postData={postData}/>
  );
  const f3View = (
    <F3 setView={setView} data ={data} setData={setData} postData={postData}/>
  );
  const purchaseView = (
    <Purchase setView={setView} data ={data} postData={postData}/>
  );

  let currentView;
  if (view === 'homepage') {
    currentView = homepageView;
  } else if (view === 'f1') {
    currentView = f1View;
  } else if (view === 'f2') {
    currentView = f2View;
  } else if (view === 'f3') {
    currentView = f3View;
  } else if (view === 'purchase') {
    currentView = purchaseView;
  }

  return (
    <>{currentView}</>
  );
};


render(
  <App />,
  document.getElementById("root")
);

//<code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>